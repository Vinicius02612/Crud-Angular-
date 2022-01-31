import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Prodcut } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  baseUrl = ' http://localhost:3001/products'

  constructor(private snackBar: MatSnackBar, private http:HttpClient) { }

  ShowMessage(message: string): void {
    this.snackBar.open(message, 'X', {
      duration: 4000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  //cadastrando produtos 
  create(product:Prodcut): Observable<Prodcut> {
    return this.http.post<Prodcut>(this.baseUrl, product)
  }
  //pegando todos os produtos cadastrados
  read(): Observable<Prodcut[]>{
    return this.http.get<Prodcut[]>(this.baseUrl)
  }
}
