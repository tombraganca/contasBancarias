import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
//import { timeStamp } from 'node:console';
import { Banco } from '../bancos';

import { BancosService } from '../bancos.service';
import { LocalStorageService } from '../local-storage.service';
import { Conta } from '../User';


@Component({
  selector: 'app-cadastro-conta',
  templateUrl: './cadastro-conta.component.html',
  styleUrls: ['./cadastro-conta.component.css']
})
export class CadastroContaComponent implements OnInit {

  banco: Banco[] = [];
  error: String;
  selectedBanco?: Banco;
  name = new FormControl('');

  dado: Conta;
  
  constructor(public localStorage: LocalStorageService, private apiBrasil: BancosService) {

    this.getter();

   }
  ngOnInit(): void { }

  getter(){
    this.apiBrasil.getBancos().subscribe(
      (data: Banco[]) => {
        this.banco = data;
        console.log(this.banco)
        console.log("data recebida", data)
      }, (error: String) => {
      this.error = error;
      console.error('Error:', error)
      }
    );
  }
  onSelect(banco: Banco): void {
    this.selectedBanco = banco;
    this.name.setValue(banco.name);
    this.name.markAsTouched();
  }

  save(nome: string, conta: string, agencia: string, bank: Banco){
    this.dado = { name: nome, nConta: conta, agencia: agencia, banco: bank };
    console.log(this.dado)
  }
}
