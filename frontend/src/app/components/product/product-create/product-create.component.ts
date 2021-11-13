import { Product } from './../product.model';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product ={
    name: '',
    price: 0
  }

  constructor(private productService:ProductService, private router:Router) { }

  ngOnInit(): void {
    
  }

  createProduct(): void {
    this.productService.create(this.product).subscribe(() =>{
      //quando o produto for criado, receberomso a mensagem que ele foi criado
      this.productService.showMessage('Produto criado')!
      this.router.navigate(['/products'])
    })
    this.productService.showMessage('Produto criado!')
  }

  cancel(): void {
    this.router.navigate(['/products'])
  }

}
