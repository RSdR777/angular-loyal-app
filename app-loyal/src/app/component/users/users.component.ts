import { Component, OnInit } from '@angular/core';

export interface Articulo {
  id: number,
  titulo: string,
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {
  edad: number = 15;
  nombre: string = "Calos López";
  lista:string[]=[];
  articulo: Articulo = {
    id: 1,
    titulo: 'micrófono'
  }
  // no es necesario incluir el tipo, pero sí aconsejable
  alto=true;

  constructor() {
    // cargo la lista cuando nace el componente
    this.lista.push('primero');
    this.lista.push('segundo');
  }

  ngOnInit(): void {
  }

  //podemos definir un método
  getArticulo(): Articulo {
    return this.articulo;
  }

  sumar(a:number, b:number) {
    return a + b;
  }
}
