import { Component, OnInit } from '@angular/core';
import { StaffListService } from './staff-list/staff-list.service';

@Component({
  selector: 'app-staff-page',
  templateUrl: './staff-page.component.html',
  styleUrls: ['./staff-page.component.scss']
})
export class StaffPageComponent implements OnInit {

  constructor(private staffService: StaffListService) { }

  ngOnInit() {
    this.staffService.getStaffData();
  }

}
