import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Produto } from '../model/Produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor(private http: HttpClient) { }

//endpoint = ponto onde eu me conecto com o servidor 

getAllProdutos(){
  return this.http.get('http://31.220.57.121:9080/produtos')
}

postProduto(produto: Produto){
  return this.http.post('http://31.220.57.121:9080/produtos/', produto)
}

}
