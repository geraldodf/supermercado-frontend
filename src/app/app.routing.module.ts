import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProdutosComponent} from "./produtos/produtos.component";
import {EditarProdutoComponent} from "./editar-produto/editar-produto.component";
import {CadastrarProdutoComponent} from "./cadastrar-produto/cadastrar-produto.component";

const routes: Routes = [
  {path:"produtos", component: ProdutosComponent},
  {path:"editar-produto/:id", component: EditarProdutoComponent},
  {path:"cadastrar-produto", component: CadastrarProdutoComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
