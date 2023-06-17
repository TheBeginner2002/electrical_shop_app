import { Component } from '@angular/core';
import { ProductModel } from 'src/app/model/product-model';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent {

  constructor(
    private appService: AppService
  ) { }

  products: ProductModel[] = [];

  ngOnInit(): void {
    this.products = this.appService.getProducts();
  }
}
