import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {ProdutoServiceService} from "../produto-service.service";
import {Produto} from "../../models/Produto";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-editar-produto',
  templateUrl: './editar-produto.component.html',
  styleUrls: ['./editar-produto.component.scss']
})
export class EditarProdutoComponent implements OnInit {

  produto: Produto = new Produto();

  form = new FormGroup({
    descricao: new FormControl(),
    codigo: new FormControl(),
    preco: new FormControl(),
    quantidade: new FormControl()
  });


  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private produtoService: ProdutoServiceService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {

    this.route.params.subscribe(param => {
      this.pegarProdutoPeloId(param.id);
    })

    this.form = formBuilder.group({
      id: [],
      descricao: [],
      codigo: [],
      preco: [],
      quantidade: []
    })
  }

  ngOnInit(): void {
  }

  pegarProdutoPeloId(id: Number) {
    this.produtoService.pegarProdutoPeloID(id).subscribe(resposta => {
      this.criarFormulario(resposta)
      console.log(resposta.preco.toExponential())
    }, error => {
    })
  }

  editarProduto() {
    console.log(this.form.value)
    this.produtoService.editarProduto(this.form.value).subscribe(resposta => {
      this.router.navigate(["produtos"])
    }, error => {

    })
  }

  criarFormulario(produto: Produto) {
    this.form = this.formBuilder.group({
      id: [produto.id],
      descricao: [produto.descricao],
      codigo: [produto.codigo],
      preco: [produto.preco],
      quantidade: [produto.quantidade]
    })
  }


}
