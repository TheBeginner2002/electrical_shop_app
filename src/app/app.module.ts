import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ImageSliderModule } from './components/image-slider/image-slider.module';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { ToolbarModule } from './components/toolbar/toolbar.module';
import { CardModule } from './components/card/card.module';


@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    ProductPageComponent,
    CartPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ImageSliderModule,
    ToolbarModule,
    CardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
