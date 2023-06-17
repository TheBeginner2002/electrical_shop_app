import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductModel } from 'src/app/model/product-model';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent {
  cartProducts:ProductModel[] = [];
  selectedProducts: ProductModel[] = [];

  constructor(
    private appService: AppService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.cartProducts = this.appService.getCartProducts();
  }

  removeSelectedFromCart() {
    // this.cartProducts = this.cartProducts.filter(p => !this.selectedProducts.includes(p));
    // this.appService.updateCartProducts(this.cartProducts);
    // this.selectedProducts = [];
    this.cartProducts = this.cartProducts.filter(product => !this.selectedProducts.includes(product));
    this.appService.updateCartProducts(this.cartProducts);
    this.selectedProducts = [];
  }

  onProductSelected(product: ProductModel, selected: boolean) {
    if (selected) {
      this.selectedProducts.push(product); // Add the selected product to the selectedProducts array
    } else {
      const index = this.selectedProducts.indexOf(product);
      if (index !== -1) {
        this.selectedProducts.splice(index, 1); // Remove the deselected product from the selectedProducts array
      }
    }
  }

  goToPurchasePage() {
    this.router.navigate(['/purchase'], { state: { selectedProducts: this.selectedProducts } }); // Navigate to the purchase page and pass the selectedProducts array as state
  }
}
