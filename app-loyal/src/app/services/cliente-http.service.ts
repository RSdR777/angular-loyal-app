import { InformacionCliente } from './informacion-cliente';
import { environment } from './../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteHttpService {
  // url base
  urlSearch = environment.url_api_reqres;
  endPoint = '/assets/datos.json';


  /*pordemos hacer una peticion http REST */
  constructor(private httpClient: HttpClient) { }

  search(clave:string): Observable<InformacionCliente>{
    //await fetch('url')
    console.log('buscando: ', clave)

    // enviar la clave para buscar a un servicio externo

    return this.httpClient.get<InformacionCliente>(this.endPoint);
  }

  /*
  post(): void {
    this.httpClient.post('',{},{});
  }*/

}
