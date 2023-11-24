import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-input-examen',
  templateUrl: './input-examen.page.html',
  styleUrls: ['./input-examen.page.scss'],
})
export class InputExamenPage implements OnInit {

  nombre: string = 'Cristel Esther Montaño ';
  usuario: {
    email: String;
    Telephone: String;
    birthdate: Date;
  }

  constructor() {
    this.usuario ={
    email: '',
    Telephone: '',
    birthdate: new Date()
    }
   }

  ngOnInit() {
  }
  onSubmit(formulario: NgForm){
    console.log('Submit');
    console.log(this.usuario);
    console.log(formulario);
  }
}
