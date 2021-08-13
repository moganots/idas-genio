import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { User } from 'app/shared/domain-models/user/user';
import { AuthenticationService } from '../authentication-service/authentication.service';

@Injectable({ providedIn: 'root' })
export class AuthenticationGuardService implements CanActivate {
    currentUser: User;

    constructor(
        public router: Router,
        public authenticationService: AuthenticationService
    ) {
        authenticationService.getCurrentUser().subscribe((currentUser) => {
            this.currentUser = currentUser;
        });
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this.currentUser) {
            return true;
        }
        this.router.navigate(['login']);
        return false;
    }
}