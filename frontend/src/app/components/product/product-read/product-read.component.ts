import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Prodcut } from '../product.model';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  products: Prodcut[]
  displayedColumns =['id', 'name', 'price','action']

  //injetando produtos
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.productService.read().subscribe(products =>{
        this.products = products
        
    })
  }

}
