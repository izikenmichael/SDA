import { Component, OnInit, Input } from '@angular/core';
import { Staff } from '../../staff.model';
import { Skill } from '../../skill.model';

@Component({
  selector: 'app-staff-item',
  templateUrl: './staff-item.component.html',
  styleUrls: ['./staff-item.component.scss']
})
export class StaffItemComponent implements OnInit {
  @Input() staffItem: Staff;
  staffList: Staff;
  constructor() { }

  ngOnInit() {
  }

  deleteStaffSkill(skill: Skill): boolean {
    this.staffList.deleteSkill(skill)
    return false;
  }

  addStaffSkill(skill: Skill): boolean {
    this.staffList.addSkill(skill)
    return false;
  }

}
