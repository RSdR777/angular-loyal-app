import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TopBarResolveService implements Resolve<any>{

  //usamos el httpclient
  constructor(
    private httpClient: HttpClient
  ) {
    //console.log('TopBarResolverService');
  }

  resolve( ): Observable<any> | any {
    //console.log('.resolve()');
      return this.httpClient.get('https://jsonplaceholder.typicode.com/users');
  }
}
