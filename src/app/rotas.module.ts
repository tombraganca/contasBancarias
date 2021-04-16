import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ContasComponent } from './contas/contas.component';
import { CadastroContaComponent } from './cadastro-conta/cadastro-conta.component';
import { InicioComponent } from './inicio/inicio.component';




const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'contas', component: ContasComponent },
  { path: 'cadastro-conta', component: CadastroContaComponent },
  
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
}) 

export class RotasModule { }
