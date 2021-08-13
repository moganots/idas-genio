import { User } from '../user/user';
export class AuthenticationResult {
  User: User;
  Message: string;

  constructor(user?: User, message?: string){
    this.User = user;
    this.Message = message;
  }

}