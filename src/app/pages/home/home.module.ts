import { EmpresaComponent } from './../empresa/empresa.component';
import { CondutorComponent } from './../condutor/condutor.component';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';



@NgModule({
  declarations: [HomeComponent, CondutorComponent, EmpresaComponent],
  imports: [
    CommonModule, HomeRoutingModule
  ]
})
export class HomeModule { }
