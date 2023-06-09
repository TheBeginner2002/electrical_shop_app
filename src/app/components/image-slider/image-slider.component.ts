import { Component, Input } from '@angular/core';
import { ImageModel } from 'src/app/model/image-model';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss']
})
export class ImageSliderComponent {
  @Input() images: ImageModel[] = []; 
  @Input() showDot = true;
  
  currentSlideIndex = 0;

  getCurrentSlideIndex(): string {
    return this.images[this.currentSlideIndex].url;
  }

  getCurrentTitleIndex(): string {
    return this.images[this.currentSlideIndex].title;
  }

  goToNextSlide(): void {
    const isFirstSlide = this.currentSlideIndex === this.images.length - 1;
    const nextSlide = isFirstSlide ? 0 : this.currentSlideIndex + 1;
    this.currentSlideIndex = nextSlide;
  }

  goToPreviousSlide(): void {
    const isLastSlide = this.currentSlideIndex === 0;
    const previousSlide = isLastSlide ? this.images.length - 1 : this.currentSlideIndex - 1;
    this.currentSlideIndex = previousSlide;
  }

  goToSlide(index: number): void {
    this.currentSlideIndex = index;
  }
}
