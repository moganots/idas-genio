import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonComponent } from 'app/shared/components/common/common.component';
import { SharedConfiguration } from 'app/shared/configuration/shared-configuration';
import { FileAttachment } from 'app/shared/domain-models/file-attachment';
import { AlertifyService } from 'app/shared/services/alertify-service/alertify.service';
import { AuthenticationService } from 'app/shared/services/authentication-service/authentication.service';
import { FileAttachmentService } from 'app/shared/services/file-attachment-service/file-attachment.service';
import { LookupValueService } from 'app/shared/services/lookup-value-service/lookup-value.service';
import { FileSizePipe } from 'app/shared/utilities/filesize.pipe';
import { GeneralUtils } from 'app/shared/utilities/general-utils';
import { FileDragDropDirective } from '../../directives/file-drag-drop/file-drag-drop.directive';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss'],
  providers: [
    AuthenticationService,
    FileSizePipe,
    FileDragDropDirective,
    FileAttachmentService,
  ],
})
export class FileUploadComponent extends CommonComponent implements OnInit {
  @Input() ProjectId?: number;
  @Input() TaskId?: number;
  @Input() CalendarEventId?: number;
  @Input() files: FileAttachment[] = [];
  frmGroup: FormGroup;
  constructor(
    public router: Router,
    public alertifyService: AlertifyService,
    public authenticationService: AuthenticationService,
    public lookupValueService: LookupValueService,
    private fileAttachmentService: FileAttachmentService,
    private fileSizePipe: FileSizePipe,
    private frmBuilder: FormBuilder
  ) {
    super(router, alertifyService, authenticationService, lookupValueService);
  }
  ngOnInit(): void {
    this.frmGroup = this.frmBuilder.group({
      file: [null, Validators.required],
    });
  }
  fileUpload(event) {
    if (
      event &&
      event.target &&
      event.target.files &&
      event.target.files.length &&
      event.target.files.length > 0
    ) {
      // tslint:disable-next-line:prefer-for-of
      for (let index = 0; index < event.target.files.length; index++) {
        const element = event.target.files[index];
        const fileReader = new FileReader();
        let file = {
          ProjectId: this.ProjectId,
          TaskId: this.TaskId,
          CalendarEventId: this.CalendarEventId,
          FileName: element.name,
          FileExtension: `.${GeneralUtils.getLastItem(
            element.name.split('.')
          )}`,
          ContentType: element.type,
          FileSize: element.size,
          CreatedBy: this.currentUser?._id,
          createdBy: this.currentUser,
          DateCreated: element.lastModifiedDate,
        } as unknown as FileAttachment;
        GeneralUtils.readUploadedFileAsDataUrl(element)
          .then((fileContent) => {
            file.FileContent = String(fileContent || '').replace(
              /^data:.*,/,
              ''
            );
            this.fileAttachmentService
              .CreateUpdateDelete<FileAttachment>('create', file)
              .subscribe(
                (result) => {
                  file = result;
                  this.files.push(file);
                  this.alertifyService.success(
                    `${file.FileName}, attached/added successfully`
                  );
                },
                (error) => {
                  this.alertifyService.error(
                    `${file.FileName}, could not be attached/added.\r\n${
                      error.message || error
                    }`
                  );
                }
              );
          })
          .catch((error) => {
            this.alertifyService.error(
              `${file.FileName}, could not be attached/added.\r\n${
                error.message || error
              }`
            );
          });
      }
    }
  }
  fileDownload(file: FileAttachment, index: number) {
    const blob = new Blob(JSON.parse(file.FileContent), { type: file?.ContentType || 'text/plain' });
    const url = URL.createObjectURL(blob);
  }
  fileDelete(file: FileAttachment, index: number) {
    this.fileAttachmentService
      .CreateUpdateDelete<FileAttachment>(`delete`, file)
      .subscribe(
        (result) => {
          this.files.splice(index, 1);
          this.alertifyService.success(`${file.FileName}, deleted successfully.`);
        },
        (error) => {
          this.alertifyService.error(
            `Unable to delete file: ${file.FileName}.\r\n${
              error.message || error
            }`
          );
        }
      );
  }
  getFileExtensionIcon(file: FileAttachment) {
    const fileExtension = (file || {}).FileExtension;
    let fileExtensionIcon =
      SharedConfiguration.fileExtensions.find((fe) => fe === fileExtension) ||
      `file`;
    fileExtensionIcon = GeneralUtils.getLastItem(fileExtensionIcon.split('.'));
    return `./assets/img/file-types/${fileExtensionIcon}.png`;
  }
  getFileSize(file: FileAttachment) {
    return this.fileSizePipe.transform(file.FileSize);
  }
}
