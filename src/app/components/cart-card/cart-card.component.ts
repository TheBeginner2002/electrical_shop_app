import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductModel } from 'src/app/model/product-model';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-cart-card',
  templateUrl: './cart-card.component.html',
  styleUrls: ['./cart-card.component.scss']
})
export class CartCardComponent {

  numVal:number = 1;
  @Input() cartProduct: ProductModel = {} as ProductModel;
  @Output() productSelected = new EventEmitter<{ product: ProductModel, selected: boolean }>();
  selected: boolean = false;

  constructor(
  ) { }
  
  ngOnInit(): void {
  }

  increment() {
    this.numVal++;
  }

  decrement() {
    if(this.numVal > 0) {
      this.numVal--;
    }
  }

  onCheckboxChange(event: any) {
    this.selected = event.checked; 
    this.productSelected.emit({ product: this.cartProduct, selected: this.selected });
  }
  
}
