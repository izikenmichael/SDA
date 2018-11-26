import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaffItemComponent } from './view-staff-list/staff-list-container/staff-item/staff-item.component';
import { StaffDetailFormComponent } from './staff-detail-form/staff-detail-form.component';
import { EditStaffComponent } from './edit-staff/edit-staff.component';
import { StaffPageComponent } from './staff-page.component';
import { StaffListContainerComponent } from './view-staff-list/staff-list-container/staff-list-container.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StaffPageRoutingModule } from './staff-page-routing.module';

@NgModule({
  declarations: [
    StaffItemComponent,
    StaffDetailFormComponent,
    EditStaffComponent,
    StaffPageComponent,
    StaffListContainerComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StaffPageRoutingModule
  ],
  exports: [StaffPageRoutingModule]
})
export class StaffPageModule { }
