import { PlatformLayoutComponent } from './platform-layout/platform-layout.component';
import { HomeComponent } from './pages/home/home.component';
import { TemplatesComponent } from './templates/templates.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './pages/error/error.component';
const loginsRoute:Routes=[
  {path:'',loadChildren:()=>(import("./pages/login/login.module").then((m)=>m.LoginModule))}
]
const platformRoutes:Routes=[
  {path:'',loadChildren:()=>(import("./pages/home/home.module").then((m)=>m.HomeModule))}
]
const routes: Routes = [
  {path:'',component:TemplatesComponent,children:loginsRoute},
  {path:'', component:PlatformLayoutComponent,children:platformRoutes},
  {path:'**', component: ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
