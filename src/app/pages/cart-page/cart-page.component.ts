import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BuyingProductModel } from 'src/app/model/buying-product-model';
import { ProductModel } from 'src/app/model/product-model';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent {
  cartProducts:ProductModel[] = [];
  selectedProducts: BuyingProductModel[] = [];

  constructor(
    private appService: AppService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.cartProducts = this.appService.getCartProducts();
  }

  removeSelectedFromCart() {
    this.cartProducts = this.cartProducts.filter(product => !this.selectedProducts.map(selectedProduct => selectedProduct.product).includes(product));
    this.appService.updateCartProducts(this.cartProducts);
    this.selectedProducts = [];
  }

  onProductSelected(product: ProductModel, selected: boolean, quantity: number) {
    if (selected) {
      let temp:BuyingProductModel = { product: product, quantity: quantity } as BuyingProductModel;
      this.selectedProducts.push(temp);
    } else {
      let temp:BuyingProductModel = { product: product, quantity: quantity } as BuyingProductModel;
      const index = this.selectedProducts.indexOf(temp);
      if (index !== -1) {
        this.selectedProducts.splice(index, 1); 
      }
    }
  }

  goToPurchasePage() {
    const data = { selectedProducts: this.selectedProducts }
    const queryParams = { data: JSON.stringify(data) }
    this.router.navigate(['/purchase'], { queryParams });
  }

  goBack() {
    this.router.navigate(['/']);
  }
}
