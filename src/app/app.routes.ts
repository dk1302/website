import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './components/about/about';
import { Experience } from './components/experience/experience';
import { Contact } from './components/contact/contact';

export const routes: Routes = [
  { path: '', pathMatch: 'full', component: Home},
  { path: 'about',  component: About },
  { path: 'experience',  component: Experience },
  { path: 'contact',  component: Contact },
];
