import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent {
  
  constructor(
    private dialog: MatDialogRef<PopupComponent>
  ) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.close();
    }, 5000);
  }

  close() {
    this.dialog.close();
  }
}
