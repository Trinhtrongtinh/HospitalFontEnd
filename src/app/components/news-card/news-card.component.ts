import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router'; 

@Component({
  selector: 'app-news-card',
  standalone: true,
  imports: [ RouterModule],
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.scss']
})
export class NewsCardComponent {
  @Input() image!: string;
  @Input() title!: string;
  @Input() date!: string;
  @Input() excerpt!: string;
  @Input() link!: string;
}
