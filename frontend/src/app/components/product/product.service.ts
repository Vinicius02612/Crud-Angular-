import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EMPTY, Observable } from 'rxjs';
import { Prodcut } from './product.model';
import {catchError, map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  baseUrl = ' http://localhost:3001/products'

  constructor(private snackBar: MatSnackBar, private http:HttpClient) { }

  ShowMessage(message: string, isError:boolean = false): void {
    this.snackBar.open(message, 'X', {
      duration: 4000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass:isError? ['msg-error']:['msg-success']
    })
  }

  //cadastrando produtos 
  create(product:Prodcut): Observable<Prodcut> {
    return this.http.post<Prodcut>(this.baseUrl, product).pipe(
     map(obj => obj),
     catchError(e => this.errorHandle(e))
    )
  }

  errorHandle( e: any):Observable<any>{
    this.ShowMessage('Ocorreu um erro', true)
    return EMPTY
  }
  //pegando todos os produtos cadastrados
  read(): Observable<Prodcut[]>{
    return this.http.get<Prodcut[]>(this.baseUrl)
  }

//pegando o ID do produtos
  readById(id: string):Observable<Prodcut>{
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Prodcut>(url)
  }
  //Atualizando o produtos
  upadte(product:Prodcut):Observable<Prodcut>{
    const url = `${this.baseUrl}/${product.id}`
    return this.http.put<Prodcut>(url, product)
  }

  delete(id:number):Observable<Prodcut>{
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<Prodcut>(url)
  }
}
