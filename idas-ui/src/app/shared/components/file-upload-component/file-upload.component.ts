import { Component, Input, OnInit } from '@angular/core';
import { SharedConfiguration } from 'app/shared/configuration/shared-configuration';
import { FileAttachment } from 'app/shared/domain-models/file-attachment';
import { User } from 'app/shared/domain-models/user/user';
import { AuthenticationService } from 'app/shared/services/authentication-service/authentication.service';
import { FileSizePipe } from 'app/shared/utilities/filesize.pipe';
import { GeneralUtils } from 'app/shared/utilities/general-utils';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss'],
  providers: [AuthenticationService, FileSizePipe],
})
export class FileUploadComponent {
  @Input() ProjectId?: number;
  @Input() TaskId?: number;
  @Input() files: FileAttachment[] = [];
  currentUser: User;

  constructor(
    private authenticationService: AuthenticationService,
    private fileSizePipe: FileSizePipe
  ) {
    this.authenticationService.getCurrentUser().subscribe((user) => {
      this.currentUser = user;
    });
  }

  uploadFile(event) {
    // tslint:disable-next-line:prefer-for-of
    for (let index = 0; index < event.length; index++) {
      const element = event[index];
      const file = {
        FileName: element.name,
        FileSize: element.size,
        ProjectId: this.ProjectId,
        TaskId: this.TaskId,
        createdBy: this.currentUser,
        DateCreated: element.lastModifiedDate
      } as unknown as FileAttachment;
      console.log(file)
      file.Url = GeneralUtils.getFileAttachmentUrl(file);
      this.files.push(file);
    }
  }
  deleteAttachment(index) {
    this.files.splice(index, 1);
  }
  getFileExtensionIcon(file: FileAttachment) {
    const fileExtension = (file || {}).FileName.split('.')[1];
    const fileExtensionIcon =
      SharedConfiguration.fileExtensions.find((fe) => fe === fileExtension) ||
      `file`;
    return `./assets/img/file-types/${fileExtensionIcon}.png`;
  }
  getFileSize(file: FileAttachment) {
    return this.fileSizePipe.transform(file.FileSize);
  }
}
