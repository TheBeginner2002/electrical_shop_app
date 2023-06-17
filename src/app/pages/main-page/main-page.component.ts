import { Component } from '@angular/core';
import { ProductModel } from 'src/app/model/product-model';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent {
  products: ProductModel[] = [];

  constructor(
    private appService: AppService
  ) { }

  title:string | undefined;
  subTitle:string | undefined;
  activeSlideIndex = 0;
  

  changeTitle(index:number): void {
    this.title = this.products[index]?.title;
    this.subTitle = this.products[index]?.subTitle;
  }

  ngOnInit() {
    this.products = this.appService.getProducts();
    this.title = this.products[0]?.title;
    this.subTitle = this.products[0]?.subTitle;
  }

}
