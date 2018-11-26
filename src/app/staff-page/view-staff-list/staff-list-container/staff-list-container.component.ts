import { Component, OnInit } from '@angular/core';
import { StaffListService } from '../../staff.service';
import { NewStaff } from '../../staff.model';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-staff-list-container',
  templateUrl: './staff-list-container.component.html',
  styleUrls: ['./staff-list-container.component.scss']
})
export class StaffListContainerComponent implements OnInit {
  staffList: NewStaff[];
  selectedStaff: any;

  constructor(
    private staffService: StaffListService,
    private router: Router,
    private aRoute: ActivatedRoute
  ) {
    this.staffService.staff.subscribe((list: NewStaff[]) => this.staffList = list)
    this.staffService.selectedStaff.subscribe((s: any) => this.selectedStaff = s)
  }

  ngOnInit() {
    this.checkURLParam();
  }

  checkURLParam() {
    let id = this.aRoute.snapshot.paramMap.get('id');
    if (id) {
      this.getSelected(id);
    }
    this.selectedStaff = null;
  }

  getSelected(id) {
    this.staffService.getStaffDetails(id);
  }

}
