import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './heading.html',
  styleUrl: './heading.css'
})
export class HeaderComponent {

  menuOpen = false;

}