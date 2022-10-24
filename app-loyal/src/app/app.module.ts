import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './component/users/users.component';
import { LoginComponent } from './component/login/login.component';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SaldoComponent } from './components/saldo/saldo.component';
import { DatosEquipoComponent } from './components/datos-equipo/datos-equipo.component';
import { ContactoClienteComponent } from './components/contacto-cliente/contacto-cliente.component';
import { RecomendacionesComponent } from './components/recomendaciones/recomendaciones.component';
import { TemplateDrivenComponent } from './formularios/template-driven/template-driven.component';
import { ReactiveFormComponent } from './formularios/reactive-form/reactive-form.component';

@NgModule({
  /* definir las vistas que forman parte del módulo*/
  declarations: [
    AppComponent,
    UsersComponent,  /* ng g c users */
    LoginComponent,   /* ng g c login */
    DashboardComponent,
    NavbarComponent,
    TopbarComponent,
    FooterComponent,
    SaldoComponent,
    DatosEquipoComponent,
    ContactoClienteComponent,
    RecomendacionesComponent,
    TemplateDrivenComponent,
    ReactiveFormComponent,
  ],
  /* export de otros módulos que importamos */
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormComponent
  ],
  /*servicios qie se pueden acceder desde cualquier parte de la aplicación (por ser el módulo raíz)*/
  providers: [],
  /*componoente inicial de la aplicación (el 'play'). Componente que arranca */
  bootstrap: [AppComponent]
})
export class AppModule { }
