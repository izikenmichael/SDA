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
 selectedStaff: Subject<any> = new BehaviorSubject<any>(null);
  constructor(private http: HttpClient) { }

  getStaff(id?): Observable<any> {
   if (id) {
    return this.http.get(`${this.PATH}${id}`);
   } 
   return this.http.get(this.PATH);
  }

  getStaffList() {
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

  getStaffDetails(id) {
    this.getStaff(id).subscribe(
      res => {
        console.log(res);
        res.id = id;
        this.selectedStaff.next(res)
      },
      (err: HttpErrorResponse) => {
        console.log(err);
      }
    )
  }

  extractData(results) {
    let s: NewStaff[] = [];
    for (const staff of results) {
      let id = staff.url.split('/').slice(0, -1).pop();
      console.log(id);
    s.push(
      new NewStaff(id, staff.name, staff.height, staff.eye_color)
      )
     console.log(s);
    }
    this.staff.next(s);
  }

  

}
