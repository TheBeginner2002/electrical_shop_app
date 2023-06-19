import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ProductModel } from 'src/app/model/product-model';
import { AppService } from 'src/app/services/app.service';
import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  @Input() product: ProductModel = {} as ProductModel;
  @Output() popupMessage = new EventEmitter<any>();

  constructor(
    private appService: AppService,
    private router: Router,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) { }

  addToCart() {
    this.appService.addCart(this.product);
    this.popupMessage.emit('Added to cart');
  }

  buyNow() {
    this.appService.addCart(this.product);
    this.popupMessage.emit('Added to cart');
    this.router.navigate(['/cart']);
  }

  // popupMessage(message: string) {
  //   // this.snackBar.open(message, 'Splash', {
  //   //   duration: 5000,
  //   //   horizontalPosition: this.horizontalPosition,
  //   //   verticalPosition: this.verticalPosition,
  //   // });

  //   const dialogRef = this.dialog.open(PopupComponent, {
  //     width: '300px',
  //     height: '150px',
  //     position: { top: '50px', right: '50px' }
  //   });
  // }
}
