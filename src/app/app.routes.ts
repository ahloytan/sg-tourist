import { DosDontsComponent } from './components/dos-donts/dos-donts.component';
import { EmbedMapComponent } from './components/embed-map/embed-map.component';
import { HomeComponent } from './components/home/home.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'map', component: EmbedMapComponent }, // Reusing HomeComponent for map view
  { path: 'dos-donts', component: DosDontsComponent },
  { path: '**', redirectTo: '' }
];
