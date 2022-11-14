import { HomeModule } from './pages/home/home.module';
import { LoginModule } from './pages/login/login.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplatesComponent } from './templates/templates.component';
import { HomeComponent } from './pages/home/home.component';
import { CondutorComponent } from './pages/condutor/condutor.component';
import { GpsComponent } from './pages/gps/gps.component';
import { EmpresaComponent } from './pages/empresa/empresa.component';
import { FiscalComponent } from './pages/fiscal/fiscal.component';
import { RotaComponent } from './pages/rota/rota.component';
import { TerminalComponent } from './pages/terminal/terminal.component';
import { FiscalizacaoComponent } from './pages/fiscalizacao/fiscalizacao.component';
import { ErrorComponent } from './pages/error/error.component';
import { PlatformLayoutComponent } from './platform-layout/platform-layout.component';
import { NavbarComponent } from './platform-layout/navbar/navbar.component';
import { FooterComponent } from './platform-layout/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplatesComponent,
    GpsComponent,
    FiscalComponent,
    RotaComponent,
    TerminalComponent,
    FiscalizacaoComponent,
    ErrorComponent,
    PlatformLayoutComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, LoginModule, HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
