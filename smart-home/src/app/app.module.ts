import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';


const appRoute: Routes = [{
  path: 'login',
  component: 'LoginComponent'
},
{
  path: 'dashboard',
  component: 'DashboardComponent'
},
{
  path: '**',
  pathMatch: 'full',
  redirectTo: 'login'
}]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(
      appRoute
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
