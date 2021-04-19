import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

import { BancosService } from '../bancos.service';
import { LocalStorageService } from '../local-storage.service';
import { Conta } from '../User';
import { Banco } from '../bancos';

@Component({
  selector: 'app-cadastro-conta',
  templateUrl: './cadastro-conta.component.html',
  styleUrls: ['./cadastro-conta.component.css']
})
export class CadastroContaComponent implements OnInit {

  conta;
  agencia;
  name;
  banco: Banco[] = [];
  error: String;
  selectedBanco?: Banco;
  tam: string = this.getTam();;
  key: String;

  dado: Conta;
  
  constructor(public localStorage: LocalStorageService, private apiBrasil: BancosService) {

    this.getter();

   }
  ngOnInit(): void {
   }


  getter(){
    this.apiBrasil.getBancos().subscribe(
      (data: Banco[]) => {
        this.banco = data;        
      }, (error: String) => {
      this.error = error;
      }
    );
  }
  onSelect(banco: Banco): void {
    this.selectedBanco = banco;
    this.name.setValue(banco.name);
    this.name.markAsTouched();
  }

  save(nome: string, conta: string, agencia: string, bank: Banco){
    let key = `${Number(this.tam)}`;
    this.dado = { id: key, name: nome, nConta: conta, agencia: agencia, banco: bank };
    const data = JSON.stringify(this.dado);
    localStorage.setItem(this.dado.id, data);
  }

  getTam(): string{
    return localStorage.length?`${localStorage.length}`:"0";
  }


}
