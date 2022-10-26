/*import { DatosEquipo } from './../../dashboard/dashboard.component';*/
import { Component, Input, OnInit } from '@angular/core';
import { Equipo } from 'src/app/services/informacion-cliente';

@Component({
  selector: 'app-datos-equipo',
  templateUrl: './datos-equipo.component.html',
  styleUrls: ['./datos-equipo.component.css']
})
export class DatosEquipoComponent implements OnInit {

  @Input()
  equipo?: Equipo;

  constructor() { }

  ngOnInit(): void {
    //console.log(this.equipo);
  }

}
