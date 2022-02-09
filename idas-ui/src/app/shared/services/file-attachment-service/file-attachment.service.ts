import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FileAttachment } from 'app/shared/domain-models/file-attachment';
import { ResponseResult } from 'app/shared/domain-models/http/response-result';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
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
    this.dataColumns = FileAttachmentConfiguration.dataColumns;
  }
  download(file: FileAttachment): Observable<FileAttachment> {
    this.resourceType = `download`;
    return this.httpClient
      .get(this.getEndpointUrl(), this.getQueryParams({id: file._id}))
      .pipe(
        map(
          (responseResult: ResponseResult) =>
            (responseResult.data || [] as unknown as FileAttachment[]).map(value => this.mapValues(value))
        ),
        catchError((error) => this._handleError(error))
      );
  }
  mapValues(fileAttachment: FileAttachment) {
    // fileAttachment.RouterLink = GeneralUtils.getFileAttachmentUrl(fileAttachment);
    return fileAttachment;
  }
}
