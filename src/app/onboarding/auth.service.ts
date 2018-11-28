import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAdmin = false;
  redirect: string;
  constructor() { }

  dummyLogin(): Observable<boolean> {
    return of(true).pipe(
     // dummy login delays for 1 sec and sets isadmin to true
      delay(1000), tap(val => this.isAdmin = true)
    )
  }

  logout() {
    this.isAdmin = false;
  }
}
