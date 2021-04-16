import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MensagemService {

  mensagem: string [] = [];
  
  add(mensagem: string){
    this.mensagem.push(mensagem);
  }

  clear(){
    this.mensagem = [];
  }
  
  constructor() { }
}
