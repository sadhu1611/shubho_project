import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { dashBoardComponent } from './dashboard/dashboard.component';
import { detailsComponent } from './details/details.component';
import { addRecordComponent } from './addRecord/addRecord.component';
import { logInComponent } from './logIn.component';

const routes: Routes = [
  { path: 'logIn', component: logInComponent },
  { path: 'details/:id', component: detailsComponent },
  { path: 'dashboard', component: dashBoardComponent },
  { path: 'add', component: addRecordComponent },
  { path: '**', redirectTo: 'logIn', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
