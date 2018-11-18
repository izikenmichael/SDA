import { Component, OnInit, Input } from '@angular/core';
import { Staff } from 'src/app/staff-page/staff.model';

@Component({
  selector: 'app-staff-item',
  templateUrl: './staff-item.component.html',
  styleUrls: ['./staff-item.component.scss']
})
export class StaffItemComponent implements OnInit {
  @Input() staffItem: Staff;
  constructor() { }

  ngOnInit() {
  }

}
