import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private aService: AuthService, private routr: Router) {

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      let URL: string = state.url
      console.log(next);
      console.log(state);
      console.log('AuthGard is initiated. No stories');
    return this.checkAdmin(URL);
  }

  checkAdmin(url) {
    if (this.aService.isAdmin) {
      return true
    }
    this.aService.redirect = url;
    this.routr.navigate(['/login']);
    return false;

  }
}
