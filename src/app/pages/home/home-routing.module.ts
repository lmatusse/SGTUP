import { EmpresaComponent } from './../empresa/empresa.component';
import { CondutorComponent } from './../condutor/condutor.component';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
const platformRoute:Routes=[
  {path:'home', component:HomeComponent},
  {path:'autocarro', component: CondutorComponent},
  {path:'empresa', component: EmpresaComponent}
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(platformRoute)
  ],
  exports:[RouterModule]
})
export class HomeRoutingModule { }
