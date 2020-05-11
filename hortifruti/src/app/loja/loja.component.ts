import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../service/produtos.service';
import { Produto } from '../model/Produto';

@Component({
  selector: 'app-loja',
  templateUrl: './loja.component.html',
  styleUrls: ['./loja.component.css']
})
export class LojaComponent implements OnInit {

  
  listaProdutos: Produto[]
  produto: Produto = new Produto
  
  
  constructor(private produtosService: ProdutosService) { }

  ngOnInit(){
    this.findallProdutos()
  }

  findallProdutos(){
    this.produtosService.getAllProdutos().subscribe((resp: Produto[])=>{
      this.listaProdutos = resp
    })
  }

  publicar(){
    this.produtosService.postProduto(this.produto).subscribe((resp: Produto)=>{
      this.produto = resp 
      location.assign('/loja')
      this.findallProdutos()
    })
  }

}
