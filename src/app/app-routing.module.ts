import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';

const routes: Routes = [
  { path: '', component : MainPageComponent },
  { path: 'product', component : ProductPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 