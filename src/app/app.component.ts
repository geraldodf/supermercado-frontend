import {Component, OnInit} from '@angular/core';
import {ProdutoServiceService} from "./produto-service.service";
import {Produto} from "./models/Produto";
import {ToastrService} from "ngx-toastr";
import {faCoffee, faTrash} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private produtoService: ProdutoServiceService, private toastr: ToastrService) {
  }

  title = 'supermercado-frontend';
  listaDeProdutos: Produto[] = [];
  faCoffee = faCoffee;
  faTrash = faTrash;

  ngOnInit(): void {
    this.pegarTodosProdutos();
  }

  excluirProduto(id: Number) {
    this.produtoService.excluirProduto(id).subscribe(reposta => {
      this.toastr.success('Produto excluido com sucesso!')
      this.pegarTodosProdutos();
    }, error => {
      this.toastr.error('Erro ao excluir o produto')
    })
  }

  pegarTodosProdutos(){
    this.produtoService.pegarProdutos().subscribe(resposta => {
      this.listaDeProdutos = resposta;
    }, error => {
      this.toastr.error('Erro ao pesquisar produtos!')
    })
  }
}
