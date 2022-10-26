import { AlertService } from './../commons/service/alert.service';

import { HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import {catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ErrorInterceptorService {

  constructor(
    private router:Router,
    private alertService:AlertService
    ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(catchError(err => {
      if (err.status===401){
        // auto logout if 401 response returned from api
        location.reload();
        // this.router.navigate(['401']);
      }

      const error = err.error.error ||err.message || `Error no controlado...`;

      this.alertService.error(error);
      return throwError(err);
        }
      )
    )
  }
}
