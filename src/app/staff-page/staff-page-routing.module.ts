import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditStaffComponent } from './edit-staff/edit-staff.component';
import { StaffDetailFormComponent } from './staff-detail-form/staff-detail-form.component';
import { StaffListContainerComponent } from './view-staff-list/staff-list-container/staff-list-container.component';
import { StaffPageComponent } from './staff-page.component';

const staffRoutes: Routes = [
  {
    path: 'staffManager', component: StaffPageComponent,
    children: [
      {path: '', redirectTo: 'staff-list', pathMatch: 'full'},
      { path: 'staff-list', component: StaffListContainerComponent },
      { path: 'staff-list/:id', component: StaffListContainerComponent },
      { path: 'edit-staff', component: EditStaffComponent },
      { path: 'add-staff', component: StaffDetailFormComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(staffRoutes)],
  exports: [RouterModule]
})
export class StaffPageRoutingModule { }
