import { AlertService } from './service/alert.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './components/alert/alert.component';



@NgModule({
  declarations: [
    // estará visible fuera de este módulo hay que agregarlo en export
    AlertComponent
  ],
  imports: [
    // siempre viene por defecto
    CommonModule
  ],
  providers:[
    AlertService
  ],
  exports:[
    AlertComponent
  ]
})
export class CommonsModule { }
