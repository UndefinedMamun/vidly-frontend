import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart = [];
  cart$ = new BehaviorSubject([])

  constructor() { }

  private emmit(){
    this.cart$.next(this.cart);
  }

  addToCart(movie){
    this.cart.push(movie);
    this.emmit()
  }

  removeFromCart(movie){
    let index = this.cart.indexOf(movie);
    this.cart.splice(index, 1);
    this.emmit()
  }
}
