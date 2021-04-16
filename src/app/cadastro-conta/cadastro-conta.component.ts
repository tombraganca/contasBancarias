import { Component, OnInit } from '@angular/core';

import { BancosService } from '../bancos.service';
import { LocalStorageService } from '../local-storage.service';


@Component({
  selector: 'app-cadastro-conta',
  templateUrl: './cadastro-conta.component.html',
  styleUrls: ['./cadastro-conta.component.css']
})
export class CadastroContaComponent implements OnInit {

  
  constructor(public localStorage: LocalStorageService, public apiBrasil: BancosService) {
   }

  ngOnInit(): void {

    this.apiBrasil.getBanco().subscribe(banco => console.log(banco));
    
  }

}
