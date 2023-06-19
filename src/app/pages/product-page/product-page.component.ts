import { Component } from '@angular/core';
import { ProductModel } from 'src/app/model/product-model';
import { AppService } from 'src/app/services/app.service';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from 'src/app/components/popup/popup.component';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent {
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(
    private appService: AppService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) { }

  products: ProductModel[] = [];

  ngOnInit(): void {
    this.products = this.appService.getProducts();
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
