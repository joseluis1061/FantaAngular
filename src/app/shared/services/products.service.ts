import { Injectable } from '@angular/core';
import { BehaviorSubject, Observer } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private myShoppingCart: Product[] = [];
  cart = new BehaviorSubject<Product[]>([]);
  cart$ = this.cart.asObservable();

  constructor() { }

  get getCart(){
    return this.cart;
  }
  addProductCart(product: Product){
    this.myShoppingCart.push(product)
    this.cart.next(this.myShoppingCart);
  }
}
