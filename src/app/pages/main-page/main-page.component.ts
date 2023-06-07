import { Component } from '@angular/core';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {
  activeSlideIndex = 0;
  images = [
    'https://via.placeholder.com/650x500?text=Slide+1',
    'https://via.placeholder.com/650x500?text=Slide+2',
    'https://via.placeholder.com/650x500?text=Slide+3'
  ];

  moveNext() {
    if(this.activeSlideIndex == this.images.length - 1) {
      this.activeSlideIndex = 0;
      return;
    }
    this.activeSlideIndex ++;
  }

  movePrev() {
    if(this.activeSlideIndex == 0) {
      this.activeSlideIndex = this.images.length - 1;
      return;
    }
    this.activeSlideIndex --;
  }
}
