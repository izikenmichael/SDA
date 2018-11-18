import { Component, OnInit } from '@angular/core';
import { StaffListService } from '../../staff.service';
import { NewStaff } from '../../staff.model';

@Component({
  selector: 'app-staff-list-container',
  templateUrl: './staff-list-container.component.html',
  styleUrls: ['./staff-list-container.component.scss']
})
export class StaffListContainerComponent implements OnInit {
  staffList: NewStaff[];

  constructor(private staffService: StaffListService) {
    this.staffService.staff.subscribe(
      (list: NewStaff[]) => {
        this.staffList = list;
      }
    )
   }

  ngOnInit() {
  }

}
