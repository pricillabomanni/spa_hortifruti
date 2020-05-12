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
  alerta: boolean = false
  
  constructor(private produtosService: ProdutosService) { }

  ngOnInit(){
    this.findallProdutos()
    let item: string  = localStorage.getItem('delOk')
    if (item == "true"){
      this.alerta = true
      localStorage.clear()
      setTimeout(()=>{
        location.assign('/loja')
      }, 3000)
    }
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
