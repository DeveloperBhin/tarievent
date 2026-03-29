import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Landing } from './landing/landing'
import  { HeaderComponent } from './layout/heading/heading';
import { Footer } from './layout/footer/footer';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    Landing,
    HeaderComponent,
    Footer


  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}



