import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FileAttachment } from 'app/shared/domain-models/file-attachment';
import { GeneralUtils } from 'app/shared/utilities/general-utils';
import { AuthenticationService } from '../authentication-service/authentication.service';
import { DataService } from '../data-service/data.service';
import { FileAttachmentConfiguration } from './file-attachment-configuration';

@Injectable({
  providedIn: 'root',
})
export class FileAttachmentService extends DataService {
  constructor(
    public httpClient: HttpClient,
    public authenticationService: AuthenticationService
  ) {
    super(httpClient, authenticationService);
    this.entityName = FileAttachmentConfiguration.identifier;
  }
  mapValues(fileAttachment: FileAttachment) {
    fileAttachment.Url = GeneralUtils.getFileAttachmentUrl(fileAttachment);
    return fileAttachment;
  }
}
