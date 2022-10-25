import { InformacionCliente } from './../services/informacion-cliente';
import { ClienteDataService } from './../services/cliente-data.service';
import { Component, OnInit } from '@angular/core';

/*export interface DatosEquipo {
  texto:string,
  valor:string
}

export interface SaldoContainer {
  saldos:Saldo[];
}

export interface Saldo {
  id:number,
  texto:string
}
*/


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

 /* datosEquipo:DatosEquipo[] = [
     {texto:'IMEI', valor:'234234234'},
     {texto:'ESTADO LINEA', valor:'ACTIVO'},
     {texto:'FABRICANTE', valor:'SONY'},
     {texto:'EQUIPO EN USO', valor:'SI'},
     {texto:'MISDN', valor:'222222'},
  ];


     saldos:SaldoContainer = {saldos:[
      {id:1,texto:'saldo1'},
      {id:2,texto:'saldo2'},
      {id:3,texto:'saldo3'},
      {id:4,texto:'saldo4'},
      {id:5,texto:'saldo5'},
    ]};
    */

    informacion?: InformacionCliente;

    constructor(
        private cds: ClienteDataService,
      ) { }

  ngOnInit(): void {
    // me subscribo a la respuesta
    // cuando alguien actualice la información, el 'dashboard' se va a enterar
    this.cds.getInformacionCliente().subscribe(
      data => {
          this.informacion = data;
          console.log(JSON.stringify(data))
        },
      error => alert("error obteniendo los datos " + JSON.stringify(error))

    );
  }

}
