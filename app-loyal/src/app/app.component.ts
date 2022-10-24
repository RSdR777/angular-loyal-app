import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-loyal';
  mostrarLogin:boolean = true;
  applogin = 'className';
  nombres=['juan', 'carlos', 'pedro'];
  nombre:string=  '';
  edad:number = 2;

  agregarNombre() {
    this.nombres.push(this.nombre);
  }


  cambiarVisibilidad () {
    console.log('cambiando visibilidad');
    this.mostrarLogin=!this.mostrarLogin;
  }

  alert() {
    window.alert();
  }

  cambiarClase() {
    this.applogin='otraclase';
  }

  public getEdad():number {
    return this.edad;
  }

}
