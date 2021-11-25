import { FinalizarService } from './../../../../services/finalizar.service';
import { ItemService } from './../../../../services/item.service';
import { Component, OnInit, TestabilityRegistry } from '@angular/core';
import { ItemVenda } from 'src/app/models/item-venda';
import { Venda } from 'src/app/models/venda';

@Component({
  selector: 'app-finalizarcompra',
  templateUrl: './finalizarcompra.component.html',
  styleUrls: ['./finalizarcompra.component.css']
})
export class FinalizarcompraComponent implements OnInit {
  colunasExibidas: String[] = ["nome", "preco", "quantidade", "imagem"];
  valorTotal!: number;
  nome!: string;
  itens: ItemVenda[] = [];
  arrayFormas: any[] = [];

  constructor(private finalizarService: FinalizarService, private carrinhoSubscribe: ItemService) { }
  

  ngOnInit(): void {
    this.finalizarService.listCategoria().subscribe((itens) => {
      console.log(itens);
    })

    this.finalizarService.listFormaPagamento().subscribe((formas) => {
      this.arrayFormas = formas;
      console.log(formas);
    })

  }

  finalizar(): void {
    let venda: Venda;

    this.carrinhoSubscribe.getByCartId(localStorage.getItem("carrinhoId")!).subscribe((carrinho) => {
      let teste: any = []
      carrinho.forEach(element => {
        teste.push({
          carrinhoId: element.carrinhoId,
          produtoId: element.produtoId,
          quantidade: element.quantidade,
          preco: element.preco
        }
        );
      });
      venda = {
        cliente: this.nome,
        itens: teste,
      }


      console.log(venda);

      this.finalizarService.createVenda(venda).subscribe((a) => {
        console.log(a);
      })

    })




  }

}
