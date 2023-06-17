import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartCardComponent } from './cart-card.component';
import { MatCheckboxModule } from '@angular/material/checkbox';



@NgModule({
  declarations: [
    CartCardComponent
  ],
  imports: [
    CommonModule,
    MatCheckboxModule
  ],
  exports: [
    CartCardComponent
  ],
})
export class CartCardModule { }
