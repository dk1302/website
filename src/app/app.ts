import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { routeTransition } from './route-trans';
import { Disable } from './directives/disable';
import { isPlatformBrowser } from '@angular/common';
import AOS from 'aos';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Disable],
  animations: [
    routeTransition
  ],
  template: `
    <app-header />
    <div id='text'>
      <main>
        <div appDiable="" [@routeTransition]="route.snapshot.data">
          <router-outlet></router-outlet>
        </div>
      </main>
    </div>
  `,
  styleUrl: './app.scss'
})
export class App implements AfterViewInit {
  protected title = 'Website';

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      AOS.init({});
    }
  }

  constructor(protected route: ActivatedRoute, @Inject(PLATFORM_ID) private platformId: Object) { }
}
