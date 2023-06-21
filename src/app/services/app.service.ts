import { Injectable } from '@angular/core';
import { ProductModel } from '../model/product-model';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private cartProducts: ProductModel[] = [];

  products: ProductModel[] = [
    {img: '../../../assets/TV1.png', title: 'Super TV', alt: 'TV1', subTitle: '4k Ultra HD 57"', price: 49999000},
    {img: '../../../assets/TV2.png', title: 'Sakura TV', alt: 'TV2', subTitle: '5k HDR 56"', price: 59999000},
    {img: '../../../assets/TV3.png', title: 'Google TV', alt: 'TV3', subTitle: '4k Ultra HD 55"', price: 67999000},
    {img: '../../../assets/TV4.png', title: 'LG TV', alt: 'TV4', subTitle: 'Full HD 57"', price: 4999000},
    {img: '../../../assets/TV5.png', title: 'China TV', alt: 'TV5', subTitle: '4k HDR 60"', price: 79999000},
    {img: '../../../assets/TV6.png', title: 'Samsung TV', alt: 'TV6', subTitle: '4k Ultra HD 50"', price: 69999000},
  ];

  constructor() {
    const cartProducts = localStorage.getItem('cartProducts');
    if (cartProducts) {
      this.cartProducts = JSON.parse(cartProducts);
    }
  }

  getProducts(): ProductModel[] {
    return this.products;
  }

  getCartProducts(): ProductModel[] {
    return this.cartProducts;
  }

  addCart(product: ProductModel): void {
    this.cartProducts.push(product);
    localStorage.setItem('cartProducts', JSON.stringify(this.cartProducts));
  }

  clearCart() {
    this.cartProducts = [];
    localStorage.removeItem('cartProducts');
  }

  updateCartProducts(products: ProductModel[]) {
    this.cartProducts = products;
    localStorage.setItem('cartProducts', JSON.stringify(this.cartProducts));
  }
}
