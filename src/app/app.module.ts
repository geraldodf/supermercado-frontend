import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ToastrModule} from "ngx-toastr";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import { ProdutosComponent } from './produtos/produtos.component';
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from "./app.routing.module";
import {EditarProdutoComponent} from "./editar-produto/editar-produto.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CadastrarProdutoComponent} from "./cadastrar-produto/cadastrar-produto.component";

@NgModule({
  declarations: [
    AppComponent,
    ProdutosComponent,
    EditarProdutoComponent,
    CadastrarProdutoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    FontAwesomeModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
