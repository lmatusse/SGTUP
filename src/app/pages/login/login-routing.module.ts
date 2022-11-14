import { LoginComponent } from './login.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const loginRoute:Routes=[
  {path:'login', component:LoginComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(loginRoute)
  ],
  exports:[RouterModule]
})
export class LoginRoutingModule { }
