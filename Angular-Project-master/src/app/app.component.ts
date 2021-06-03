import { Component } from '@angular/core';
import { logInComponent } from './logIn.component';
import {dashBoardComponent} from './dashboard/dashboard.component'
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
}