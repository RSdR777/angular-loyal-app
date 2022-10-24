import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './component/users/users.component';
import { LoginComponent } from './component/login/login.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  /* definir las vistas que forman parte del módulo*/
  declarations: [
    AppComponent,
    UsersComponent,  /* ng g c users */
    LoginComponent   /* ng g c login */
  ],
  /* export de otros módulos que importamos */
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  /*servicios qie se pueden acceder desde cualquier parte de la aplicación (por ser el módulo raíz)*/
  providers: [],
  /*componoente inicial de la aplicación (el 'play'). Componente que arranca */
  bootstrap: [AppComponent]
})
export class AppModule { }
