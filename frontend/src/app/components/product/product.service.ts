import { Product } from './product.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//antes de utilizálo aqui é necessário importar o snack-bar no app.modules
//serve para exibir a mensagem rapidamente, semelhante à um toastmessage
import {MatSnackBar} from '@angular/material/snack-bar';
import { Observable } from 'rxjs';

//Indica que essa classe pode ser injetada em outras classes
@Injectable({
  providedIn: 'root'
})

export class ProductService {

  baseUrl = "http://localhost:3001/products"

  constructor(private snackBar:MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg,'X',{
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"

    }); 
  }
  create(product: Product):Observable<Product>{
    return this.http.post<Product>(this.baseUrl, product)
  }
}