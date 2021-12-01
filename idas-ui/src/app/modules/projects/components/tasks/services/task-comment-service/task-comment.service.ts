import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskCommentService {

  constructor(
    public httpClient: HttpClient,
    public authenticationService: AuthenticationService,) { }
}
