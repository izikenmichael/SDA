import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppComponent } from './app.component';
import { StaffDetailFormComponent } from './staff-detail-form/staff-detail-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LandingComponent } from './landing/landing.component';
import { EditStaffComponent } from './edit-staff/edit-staff.component';
import { StaffPageComponent } from './staff-page/staff-page.component';
import { StaffListComponent } from './staff-page/staff-list/staff-list.component';
import { StaffItemComponent } from './staff-page/staff-item/staff-item.component';
import { HttpClientModule } from '@angular/common/http';
import { StaffListContainerComponent } from './staff-page/staff-list-container/staff-list-container.component';

@NgModule({
  declarations: [
    AppComponent,
    StaffItemComponent,
    StaffDetailFormComponent,
    LandingComponent,
    EditStaffComponent,
    StaffPageComponent,
    StaffListComponent,
    StaffListContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
