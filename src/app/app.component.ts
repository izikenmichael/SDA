import { Component, OnInit } from '@angular/core';
import { Staff } from './staff.model';
import { Skill } from './skill.model';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  // ANgular property for binding to our input tag on the view
  firstInput = new FormControl('Mike');
  staffList: Staff[] = [];
  staff: Staff;
  skills: Skill[];

  constructor() {
    this.staffList = [
      new Staff('Mike', []),
    ];
    this.skills = [];
  }

  ngOnInit(): void {
   setTimeout(() => {
     this.addStaffDetails()
   }, 5000);
  }

  addStaffDetails() {
    this.addSkill();
    this.staffList.push(new Staff('Kadri Sharma', []))
  }

  addSkill() {
    this.skills.push(new Skill('UI Consultant', 'Research and Analysis'))
    this.skills.push(new Skill('UI Designer', 'Research and Analysis'))
    this.skills.push(new Skill('UI Developer', 'Research and Analysis'))
  }

  updateInput() {
    const newName = 'Malaika';
    // Previous value fron user inpout
    console.log('old value from user' + this.firstInput.value);
    this.firstInput.setValue(newName);
    // new value from controller
    console.log('new value' + this.firstInput.value);
  }
}
