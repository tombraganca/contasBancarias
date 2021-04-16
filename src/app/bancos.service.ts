import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Conta } from './User';
import { MensagemService } from './mensagem.service'



@Injectable({
  providedIn: 'root'
})
export class BancosService {

  private bancosUrl = 'https://brasilapi.com.br/api/banks/v1'

  constructor(
    private http: HttpClient,
    private MensagemService: MensagemService) { }

  getBanco(): Observable<Conta[]> {
    return this.http.get<Conta[]>(this.bancosUrl)
    }
}

