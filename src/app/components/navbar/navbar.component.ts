import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-navbar',
  standalone: true, 
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  @Input() image!: string;
  @Input() title!: string;
  @Input() date!: string;
  @Input() excerpt!: string;
  @Input() link!: string;
}
