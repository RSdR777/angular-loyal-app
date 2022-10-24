import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  submitForm(form: any): void {
    if(!form.valid) {
      alert('Formulario inválido');
      return;
    }

    // se invocaría un servicio

    console.log(form);
  }

}
