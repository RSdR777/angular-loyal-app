import { AlertService } from './../../commons/service/alert.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ClienteHttpService } from 'src/app/services/cliente-http.service';
import { ClienteDataService } from './../../services/cliente-data.service';
import { HttpClient } from '@angular/common/http';
import { Commentario, Users } from 'src/app/model/json-placeholder';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {
  @Input()
  users?: Users[];

  posts:Commentario[] = [];

  constructor(
    private fb: FormBuilder,
    private clienteHttpSerive: ClienteHttpService,
    private clienteDataService: ClienteDataService,
    private http: HttpClient,
    private alertservice:AlertService
    ) { }

  searchForm: FormGroup = this.fb.group({
    numeroTelefono: ['', [Validators.required]],
  });

  ngOnInit(): void {
    //console.log(this.users);
    this.http.get<Commentario[]>('https://jsonplaceholder.typicode.com/comments?postId=1').subscribe(
      data => this.posts = data
    );
  }

  executeSearch() {
    //1 - invocar el metood search
    if(this.searchForm.invalid) {
      return ;
    }

    this.clienteHttpSerive.search(this.searchForm.get('numeroTelefono')?.value).subscribe(
      //success
      data => {
        //convertir antes de hacer ul update.
        this.clienteDataService.updateCliente(data);
        this.alertservice.success('Encontramos lo que buscabas!!!');
      },
      //error
      error => {
        alert('error consultando:' + JSON.stringify(error));
      },
      //end
      () => {
        console.log('fin de la busqueda')
      }
    );
  }

  reset():void {
    this.clienteDataService.clear();

  }

}
