import { Component, OnInit } from '@angular/core';
import { StaffListService } from './staff.service';
import { Skill, Staff } from './staff.model';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-staff-page',
  templateUrl: './staff-page.component.html',
  styleUrls: ['./staff-page.component.scss'],
  host: {'class': 'rgba-black-strong'}
})
export class StaffPageComponent implements OnInit {
  firstInput = new FormControl('Mike');
  staffList: Staff[] = [];
  staff: Staff;
  skills: Skill[];
  constructor(private staffService: StaffListService) { }

  ngOnInit() {
    this.staffService.getStaffData();
  }

  addStaffDetails() {
    this.addSkill();
  }

  addSkill() {
   
  }

}
