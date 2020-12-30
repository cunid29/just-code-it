import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenStorageService } from '../service/token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private tokenStorageService: TokenStorageService) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
    const token = this.tokenStorageService.getUser();
    if (token) {
      if (token.roles != "ROLE_ADMIN") {
        this.router.navigate(["/"]);
        return false;
      }
      return true;
    }
    this.router.navigate(['/my-account'], { queryParams: { returnUrl: state.url } });
    return false;
  }
}