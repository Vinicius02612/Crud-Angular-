import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Prodcut } from '../product.model';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Prodcut = {
    name: "",
    price: null
  }

  constructor(private productService: ProductService,
    private router: Router
  ) { }

  ngOnInit(): void { }

  //criando produto e mostrando mensagem quando o produto for criado
  createProduct(): void {
    this.productService.create(this.product).subscribe(() => {
      this.productService.ShowMessage("Produto Criado!!!")
      this.router.navigate(['/products'])
    })
  }
  cancel(): void {
    this.router.navigate(['/products'])
  }

}
