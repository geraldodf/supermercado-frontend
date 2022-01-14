import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProdutosComponent} from "./produtos/produtos.component";
import {EditarProdutoComponent} from "./editar-produto/editar-produto.component";

const routes: Routes = [
  {path:"produtos", component: ProdutosComponent},
  {path:"editar-produto/:id", component: EditarProdutoComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
