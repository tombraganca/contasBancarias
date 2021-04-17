import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Conta } from './User';
import { MensagemService } from './mensagem.service'
import { Banco } from './bancos'




@Injectable({
  providedIn: 'root'
})
export class BancosService {

  private bancosUrl = 'https://brasilapi.com.br/api/banks/v1'

  constructor(
    private http: HttpClient,
    private MensagemService: MensagemService) { }

  public getBancos(): Observable<any>{
    return this.http.get(this.bancosUrl)
  }
}

