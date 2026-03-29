import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import  { HeaderComponent } from './layout/heading/heading';
import { Footer } from './layout/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    Footer,


  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}



