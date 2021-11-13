import { Component, OnInit } from '@angular/core';
import '@angular/router'
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.css']
})
export class ProductCrudComponent implements OnInit {

  //Quando o angular criar o componente, automaticamente passa o route como 
  //injeção de dependências para que possa ser utilizado nas funções
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToProductCreate(): void{
    this.router.navigate(['/products/create'])
    
  }

}
