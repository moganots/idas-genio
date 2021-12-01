import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskStatusService {

  constructor(
    public httpClient: HttpClient,
    public authenticationService: AuthenticationService,) { }
}
