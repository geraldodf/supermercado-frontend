import {Component, OnInit} from '@angular/core';
import {ProdutoServiceService} from "./produto-service.service";
import {Produto} from "./models/Produto";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private produtoService: ProdutoServiceService, private toastr: ToastrService) {
  }

  title = 'supermercado-frontend';
  listaDeProdutos:Produto[] = [];

  ngOnInit(): void {
    this.produtoService.pegarProdutos().subscribe(resposta => {
        this.listaDeProdutos = resposta;
    }, error => {
      this.toastr.error('Erro ao pesquisar produtos!')
    })
  }

}
