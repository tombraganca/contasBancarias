import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Conta } from '../User';
import { users } from '../mock-contas';
//import { FormBuilder, Validators } from '@angular/forms';
//import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: 'app-contas',
  templateUrl: './contas.component.html',
  styleUrls: ['./contas.component.css']
})
export class ContasComponent implements OnInit {

  name = new FormControl('');
  usuarios: Conta[];
  selectedUser?: Conta;

  constructor() {
    
 }

  ngOnInit(): void {
    this.usuarios = this.getContas();
    console.log(this.usuarios)
    
  }

  onSelect(user: Conta): void {
    this.selectedUser = user
    this.name.setValue(user.name);
    this.name.markAsTouched();
  }

  getContas(): Conta[]{
    let tam = localStorage.length;
    let conta: Conta[]

    for (let index = 0; index < tam; index++) {
      let aux: Conta = JSON.parse(localStorage.getItem(`${index}`))
      conta.push(aux);
    }
    return conta
  }



}
