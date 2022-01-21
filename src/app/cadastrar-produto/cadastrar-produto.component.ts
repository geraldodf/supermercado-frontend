import {Component, OnInit} from '@angular/core';
import {Produto} from "../../models/Produto";
import {ProdutoServiceService} from "../produto-service.service";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-cadastrar-produto',
  templateUrl: './cadastrar-produto.component.html',
  styleUrls: ['./cadastrar-produto.component.scss']
})
export class CadastrarProdutoComponent implements OnInit {

  form = new FormGroup({
    descricao: new FormControl(),
    codigo: new FormControl(),
    preco: new FormControl(),
    quantidade: new FormControl()
  });

  constructor(private produtoService: ProdutoServiceService,
              private formBuilder: FormBuilder,
              private router: Router,
              private toastr: ToastrService
  ) {

    this.form = formBuilder.group({
      descricao: [],
      codigo: [],
      preco: [],
      quantidade: []
    })

  }

  ngOnInit(): void {

  }

  cadastrarProduto() {
    this.produtoService.cadastrarProduto(this.form.value).subscribe(reposta => {
      this.toastr.success("Produto criado com sucesso!")
        this.router.navigate(["produtos"])
      }, error => {
      this.toastr.error("Erro ao criar produto! Tente novamente.")
      }
    )
  }

}
