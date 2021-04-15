import { Component, OnInit } from '@angular/core';

import { Conta } from '../Users';
import { users } from '../mock-contas';

@Component({
  selector: 'app-contas',
  templateUrl: './contas.component.html',
  styleUrls: ['./contas.component.css']
})
export class ContasComponent implements OnInit {

  user: Conta[] = users;
  
  constructor() { }

  ngOnInit(): void {
  }

}
