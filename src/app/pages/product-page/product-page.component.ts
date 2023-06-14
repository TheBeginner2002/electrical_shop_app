import { Component } from '@angular/core';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent {

  constructor() { }

  products = [
    {img: '../../../assets/TV1.png', title: 'Super TV', subTitle: '4k Ultra HD 57"', price: 49999000},
    {img: '../../../assets/TV2.png', title: 'Sakura TV', subTitle: '5k HDR 56"', price: 59999000},
    {img: '../../../assets/TV3.png', title: 'Google TV', subTitle: '4k Ultra HD 55"', price: 67999000},
    {img: '../../../assets/TV1.png', title: 'Super TV', subTitle: '4k Ultra HD 57"', price: 49999000},
    {img: '../../../assets/TV2.png', title: 'Sakura TV', subTitle: '5k HDR 56"', price: 59999000},
    {img: '../../../assets/TV3.png', title: 'Google TV', subTitle: '4k Ultra HD 55"', price: 67999000},
  ];
}
