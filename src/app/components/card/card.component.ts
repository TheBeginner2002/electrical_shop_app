import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ProductModel } from 'src/app/model/product-model';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() product: ProductModel = {} as ProductModel;

  constructor(
    private appService: AppService,
    private router: Router
  ) { }

  addToCart() {
    this.appService.addCart(this.product);
  }

  buyNow() {
    this.appService.addCart(this.product);
    this.router.navigate(['/cart']);
  }
}
