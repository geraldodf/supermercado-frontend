import {Component, OnInit} from '@angular/core';
import {ProdutoServiceService} from "./produto-service.service";
import {Produto} from "./models/Produto";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private produtoService: ProdutoServiceService) {
  }

  title = 'supermercado-frontend';
  produto:Produto[] = [];

  ngOnInit(): void {
    this.produtoService.pegarProdutos().subscribe(resposta => {
        this.produto = resposta;
    }, error => {

    })
  }

}
