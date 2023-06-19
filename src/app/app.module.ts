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
import { CartCardModule } from './components/cart-card/cart-card.module';
import { InfoRegistrationPageComponent } from './pages/info-registration-page/info-registration-page.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { PopupModule } from './components/popup/popup.module';
import { BillPageComponent } from './pages/bill-page/bill-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    ProductPageComponent,
    CartPageComponent,
    InfoRegistrationPageComponent,
    BillPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ImageSliderModule,
    ToolbarModule,
    CardModule,
    CartCardModule,
    MatInputModule,
    FormsModule, 
    MatFormFieldModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    PopupModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
