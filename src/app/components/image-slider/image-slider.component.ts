import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductModel } from 'src/app/model/product-model';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss']
})
export class ImageSliderComponent {
  @Input() products: ProductModel[] = []; 
  @Input() showDot = true;
  @Output() changeTitle = new EventEmitter<number>();
  
  currentSlideIndex = 0;

  getCurrentSlideIndex(): string {
    return this.products[this.currentSlideIndex].img;
  }

  getCurrentTitleIndex(): string {
    return this.products[this.currentSlideIndex].alt;
  }

  goToNextSlide(): void {
    const isFirstSlide = this.currentSlideIndex === this.products.length - 1;
    const nextSlide = isFirstSlide ? 0 : this.currentSlideIndex + 1;
    this.currentSlideIndex = nextSlide;
    this.changeTitle.emit(this.currentSlideIndex);
  }

  goToPreviousSlide(): void {
    const isLastSlide = this.currentSlideIndex === 0;
    const previousSlide = isLastSlide ? this.products.length - 1 : this.currentSlideIndex - 1;
    this.currentSlideIndex = previousSlide;
    this.changeTitle.emit(this.currentSlideIndex);
  }

  goToSlide(index: number): void {
    this.currentSlideIndex = index;
    this.changeTitle.emit(index);
  }
}
