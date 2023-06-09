import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { InfoRegistrationPageComponent } from './pages/info-registration-page/info-registration-page.component';
import { BillPageComponent } from './pages/bill-page/bill-page.component';

const routes: Routes = [
  { path: '', component : MainPageComponent },
  { path: 'product', component : ProductPageComponent },
  { path: 'cart', component : CartPageComponent },
  { path: 'purchase', component: InfoRegistrationPageComponent },
  { path: 'bill', component: BillPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 