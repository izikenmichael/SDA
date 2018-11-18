import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject, Observable } from 'rxjs';
import { NewStaff } from './staff.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StaffListService {
  staffList: NewStaff[] = [];
  PATH = 'https://swapi.co/api/people/';
 // Observable stream for staff Array
 staff: Subject<NewStaff[]> = new BehaviorSubject<NewStaff[]>(null);
  constructor(private http: HttpClient) { }

  getStaff(): Observable<any> {
    return this.http.get(this.PATH);
  }

  getStaffData() {
    this.getStaff().subscribe(
      res => {
        console.log(res.results);
        this.extractData(res.results);
      },
      (err: HttpErrorResponse) => {
        console.log(err);
      }
    )
  }

  extractData(results) {
    let s: NewStaff[] = [];
    for (const staff of results) {
    s.push(
      new NewStaff(staff.name, staff.height, staff.eye_color)
      )
     console.log(s);
    }
    this.staff.next(s);
  }

  

}
