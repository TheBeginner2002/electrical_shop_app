import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopupComponent } from './popup.component';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [
    PopupComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule
  ],
  exports: [
    PopupComponent
  ]
})
export class PopupModule { }
