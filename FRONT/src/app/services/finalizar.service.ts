import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Categoria } from "../models/categoria";
import { Venda } from "../models/venda";

@Injectable({
    providedIn: "root",
})
export class FinalizarService {
    private urlVenda = "http://localhost:5000/api/venda";
    private urlCategoria = "http://localhost:5000/api/categoria"
    private urlFormaPagamento = "http://localhost:5000/api/formapagamento"

    constructor(private http: HttpClient) {}

    listCategoria(): Observable<Categoria[]> {
        return this.http.get<Categoria[]>(`${this.urlCategoria}/list`);
    }

    listFormaPagamento(): Observable<Categoria[]> {
      return this.http.get<Categoria[]>(`${this.urlFormaPagamento}/list`)
    }
    createVenda(venda: Venda): Observable<Venda> {
      return this.http.post<Venda>(`${this.urlVenda}/create`, venda)
    }
}