import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LandingComponent } from './landing/landing.component';
import { StaffPageComponent } from './staff-page/staff-page.component';
import { HttpClientModule } from '@angular/common/http';
import { StaffDetailFormComponent } from './staff-page/staff-detail-form/staff-detail-form.component';
import { EditStaffComponent } from './staff-page/edit-staff/edit-staff.component';
import { StaffListContainerComponent } from './staff-page/view-staff-list/staff-list-container/staff-list-container.component';
import { StaffItemComponent } from './staff-page/view-staff-list/staff-list-container/staff-item/staff-item.component';

@NgModule({
  declarations: [
    AppComponent,
    StaffItemComponent,
    StaffDetailFormComponent,
    LandingComponent,
    EditStaffComponent,
    StaffPageComponent,
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
