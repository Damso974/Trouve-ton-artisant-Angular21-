import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { ArtisantsList } from './pages/artisants-list/artisants-list';
import { ArtisanDetail } from './pages/artisan-detail/artisan-detail';
import { DonneesPersonnellesComponent } from './pages/aCompléterFooter/donnees-personnelles';
import { AccessibiliteComponent } from './pages/aCompléterFooter/accessibilite';
import { CookiesComponent } from './pages/aCompléterFooter/cookies';
import { MentionsLegalesComponent } from './pages/aCompléterFooter/mentions-legales';
import { NotFound } from './pages/not-found/not-found';

export const routes: Routes = [
{path:'',component:HomeComponent},
{ path: 'artisants/:category', component: ArtisantsList },
  { path: 'artisan/:id', component: ArtisanDetail },
  { path: 'mentions-legales', component: MentionsLegalesComponent },
{ path: 'donnees-personnelles', component: DonneesPersonnellesComponent },
{ path: 'accessibilite', component: AccessibiliteComponent },
  { path: 'cookies', component: CookiesComponent },
{ path: '**', component: NotFound },
]
