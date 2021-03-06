import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Produto} from "../models/Produto";

@Injectable({
  providedIn: 'root'
})
export class ProdutoServiceService {

  constructor(private http: HttpClient) {
  }

  endpoint = 'http://localhost:8080/api/produtos';

  pegarProdutos(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.endpoint)
  }

  pegarProdutoPeloID(id: Number): Observable<Produto> {
    return this.http.get<Produto>(this.endpoint + `/${id}`)
  }

  excluirProduto(id: Number) {
    return this.http.delete(this.endpoint + `/${id}`)
  }

  editarProduto(produto: Produto){
    return this.http.put(this.endpoint + `/${produto.id}`, produto)
  }

  cadastrarProduto(produto: Produto) {
     return this.http.post(this.endpoint, produto)
  }

  pegarProdutosPelaDescrição(descricao: String): Observable<Produto[]>{
    return this.http.get<Produto[]>(this.endpoint +  `/pesquisa-por-descricao?descricao=${descricao}`)
  }
  pegarProdutosPeloCodigo(codigo: number): Observable<Produto[]>{
    return this.http.get<Produto[]>(this.endpoint +  `/pesquisa-por-codigo?codigo=${codigo}`)
  }

}
