import { Injectable } from '@angular/core';
import {
    CanActivate,
    Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
} from '@angular/router';
import { GeneralUtils } from 'app/shared/utilities/general-utils';
import { AuthenticationService } from '../authentication-service/authentication.service';

@Injectable({ providedIn: 'root' })
export class AuthenticationGuardService implements CanActivate {
    constructor(
        public router: Router,
        private authenticationService: AuthenticationService
    ) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const user = this.authenticationService.getCurrentUser;
        if(user && GeneralUtils.isStringSet(user?.SessionToken)){
            return true;
        }else{
            this.router.navigate(['login']);
            return false;
        }
    }
}
