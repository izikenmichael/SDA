import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { EditStaffComponent } from './edit-staff/edit-staff.component';
import { StaffPageComponent } from './staff-page/staff-page.component';

const appRoutes: Routes = [
  {path: '', component: LandingComponent},
  {path: 'edit-staff', component: EditStaffComponent},
  {path: 'staff-page', component: StaffPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
