import { Component, OnInit } from '@angular/core';
import {ProdutoServiceService} from "../produto-service.service";
import {ToastrService} from "ngx-toastr";
import {Produto} from "../../models/Produto";
import {faCoffee, faTrash, faEdit} from '@fortawesome/free-solid-svg-icons';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})
export class ProdutosComponent implements OnInit {

  constructor(private produtoService: ProdutoServiceService, private toastr: ToastrService) {
  }

  listaDeProdutos: Produto[] = [];
  faCoffee = faCoffee;
  faTrash = faTrash;
  faEdit = faEdit;

  form = new FormGroup({
    descricao: new FormControl(),
    codigo: new FormControl()
  });

  pegarProdutoPelaDescricao(){
    this.produtoService.pegarProdutosPelaDescrição(this.form.value.descricao).subscribe(  resposta => {
      this.listaDeProdutos = resposta;
    }, error => {

    })
  }

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
