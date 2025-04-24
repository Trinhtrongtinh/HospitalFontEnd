import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';


@Component({
  selector: 'app-navbar',
  imports: [RouterModule, CommonModule],
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
