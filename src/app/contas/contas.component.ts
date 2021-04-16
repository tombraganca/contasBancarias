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
  usuarios = users;
  selectedUser?: Conta;

  constructor() {
    
 }

  ngOnInit(): void {
    
  }

  onSelect(user: Conta): void {
    this.selectedUser = user
    this.name.setValue(user.name);
    this.name.markAsTouched();
  }

}
