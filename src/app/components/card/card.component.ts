import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() img: string = '';
  @Input() title: string = '';
  @Input() subTitle: string = '';
  @Input() price: number = 0;
}
