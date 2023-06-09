import { Component } from '@angular/core';
import { ImageModel } from 'src/app/model/image-model';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent {
  activeSlideIndex = 0;
  images: ImageModel[] = [
    {url:'https://via.placeholder.com/650x500?text=Slide+1',title: 'Slide 1'},
    {url:'https://via.placeholder.com/650x500?text=Slide+2',title: 'Slide 2'},
    {url:'https://via.placeholder.com/650x500?text=Slide+3',title: 'Slide 3'},
  ];

  ngOnInit() {
  }

}
