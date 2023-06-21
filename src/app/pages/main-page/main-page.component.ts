import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { PopupComponent } from 'src/app/components/popup/popup.component';
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
    private appService: AppService,
    private router: Router,
    private dialog: MatDialog,
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

  addToCart() {
    this.appService.addCart(this.products[this.activeSlideIndex]);
    this.popupMessage();
  }

  buyNow() {
    this.appService.addCart(this.products[this.activeSlideIndex]);
    this.popupMessage();
    this.router.navigate(['/cart']);
  }

  popupMessage() {
    // this.snackBar.open(message, 'Dismiss', {
    //   duration: 5000,
    //   verticalPosition: this.verticalPosition,
    //   horizontalPosition: this.horizontalPosition
    // });

    const dialogRef = this.dialog.open(PopupComponent, {
      width: '300px',
      height: '150px',
      position: { top: '-1400px', left: '1800px' }
    });
  }
}
