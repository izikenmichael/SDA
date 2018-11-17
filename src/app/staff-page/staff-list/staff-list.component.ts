import { Component, OnInit } from '@angular/core';
import { StaffListService } from './staff-list.service';
import { NewStaff } from './new-staff.model';

@Component({
  selector: 'app-staff-list',
  templateUrl: './staff-list.component.html',
  styleUrls: ['./staff-list.component.scss']
})
export class StaffListComponent implements OnInit {
  staffList: NewStaff[];
  constructor(private service: StaffListService) {
    this.service.staff.subscribe(
      s => {
        console.log(s)
        this.staffList = s;
      } 
    )
   }

  ngOnInit() {
    
  }

}
