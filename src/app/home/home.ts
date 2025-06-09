import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.sass'
})
export class Home {
  Description = signal('Dean Kolenchery');
}
