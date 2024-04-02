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
  private total: number = 0;
  totalSubject = new BehaviorSubject<number>(0);
  totalSubject$ = this.totalSubject.asObservable();

  constructor() { }

  get getCart(){
    return this.cart;
  }
  addProductCart(product: Product){
    const existProduct = this.myShoppingCart.findIndex(item => item.id === product.id);
    if(existProduct === -1){
      product.quantity = 1;
      this.myShoppingCart.push(product)
    }else{
      const quantity = (this.myShoppingCart[existProduct]?.quantity ?? 0) + 1;
      this.myShoppingCart[existProduct].quantity = quantity;
    }
    this.cart.next(this.myShoppingCart);
    this.totalPrice()
  }

  incrementProductCart(productId: string){
    const productSelect = this.myShoppingCart.map(item => {
      if(item.id === productId){
        return {
          ...item,
          quantity: (item?.quantity?? 0) + 1
        }
      }
      return item
    })

    this.myShoppingCart = productSelect;
    this.cart.next(this.myShoppingCart);
    this.totalPrice()
  }

  decrementProductCart(productId: string){
    const productSelect = this.myShoppingCart.map(item => {
      if(item.id === productId && item.quantity !== 1){
        return {
          ...item,
          quantity: (item?.quantity?? 0) - 1
        }
      }
      return item
    })

    this.myShoppingCart = productSelect;
    this.cart.next(this.myShoppingCart);
    this.totalPrice()
  }

  totalPrice(){
    this.total = this.myShoppingCart.reduce((priceTotal, currentPrice) => priceTotal + (currentPrice.price), 0);
    this.totalSubject.next(this.total);
  }

  remuveAll(){
    this.myShoppingCart = [];
    this.cart.next(this.myShoppingCart);
  }
}
