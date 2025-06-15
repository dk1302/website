import { Routes } from '@angular/router';
import { About } from './pages/about/about';
import { Experience } from './pages/experience/experience';
import { Contact } from './pages/contact/contact';
import { Home } from './pages/home/home';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'about', component: About },
  { path: 'experience', component: Experience },
  { path: 'contact', component: Contact }
];
