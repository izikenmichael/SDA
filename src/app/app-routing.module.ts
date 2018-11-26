import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  {path: '', component: LandingComponent},
  {path: 'page-not-found', component: PageNotFoundComponent},
  {path: '**', redirectTo: '/page-not-found', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
