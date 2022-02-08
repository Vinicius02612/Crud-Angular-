import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Prodcut } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  product:Prodcut;


  constructor(
    private productService:ProductService,
    private router:Router,
    private route:ActivatedRoute
    ) { }

  //preechendo formulario quando o usuario clicar em editar produto
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.productService.readById(id).subscribe(product =>{
      this.product = product;
    });
  }

  UpdateProduct():void{
    this.productService.upadte(this.product).subscribe(()=>{
      this.productService.ShowMessage('Produto alterado com sucesso');
      this.router.navigate(['/products']);
    })
  }

  cancel(): void{
    this.router.navigate(['/products']);
  }


}
