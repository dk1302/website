import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { About } from './pages/about/about';
import { Experience } from './pages/experience/experience';
import { Contact } from './pages/contact/contact';
import { Home } from './pages/home/home';
import { routeTransition } from './route-trans';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header],
  animations: [
    routeTransition
  ],
  template: `
    <app-header />
    <div id='text'>
      <main>
        <div [@routeTransition]="route.snapshot.data" style="display: hidden">
            <router-outlet></router-outlet>
        </div>
      </main>
    </div>
  `,
  styleUrl: './app.scss'
})
export class App {
  protected title = 'Website';
  constructor(protected route: ActivatedRoute) {}
}
