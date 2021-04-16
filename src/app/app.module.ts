import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContasComponent } from './contas/contas.component';
import { MaterialModule } from './material/material.module';
import { CadastroContaComponent } from './cadastro-conta/cadastro-conta.component';

@NgModule({
  declarations: [
    AppComponent,
    ContasComponent,
    CadastroContaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
