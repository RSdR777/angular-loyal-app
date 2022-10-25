import { ClienteDataService } from './../../services/cliente-data.service';
import { ClienteHttpService } from './../../services/cliente-http.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  // inyectar
  constructor(
    private fb: FormBuilder,
    private clienteHttpService: ClienteHttpService,
    private clientDataService: ClienteDataService
    ) { }

  searchForm: FormGroup = this.fb.group({
    numeroTelefono: ['', [Validators.required]],

  });

  ngOnInit(): void {
  }

  executeSearch() {
    if(this.searchForm.invalid) {
      return ;
    }
    this.clienteHttpService.search(this.searchForm.get('numeroTelefono')?.value).subscribe(
      //success
      data => {
        // si se necesita, se puede convertir la información antes
        this.clientDataService.updateCliente(data);
      },
      //error
      error => {
        alert('error consultando: '+ JSON.stringify(error));
      },
      //end
      () => {
        console.log('fin de la búsqueda');
      }

    );
  }

}
