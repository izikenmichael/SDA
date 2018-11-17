import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Skill } from '../skill.model';
import { Staff } from '../staff.model';

@Component({
  selector: 'app-staff-detail-form',
  templateUrl: './staff-detail-form.component.html',
  styleUrls: ['./staff-detail-form.component.scss']
})
export class StaffDetailFormComponent implements OnInit {
// form group declaration for reactive forms
reactiveStaffDetailsForm: FormGroup;
staffDetails: Staff;
// variable declaration for template forms
test: string;
tName: string;
tSkillName: string;
tSkillDesc: string;

  constructor(public fb: FormBuilder) {
  
   }

  ngOnInit() {
    this.createReactiveform();
    const a = 'Mike' 
    this.staffDetails = new Staff(a, []);
  }

  newStaff() {
    this.staffDetails = new Staff('Mike')
  }

  createReactiveform() {
    this.reactiveStaffDetailsForm = this.fb.group({
      name: ['', Validators.required],
      skillName: [''],
      skillDesc: ['']
    })
  }

}
