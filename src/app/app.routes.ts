import { Routes } from '@angular/router';
import { SeriesesComponent } from './components/serieses/serieses.component';
import { SeriesDetailsComponent } from './components/series-details/series-details.component';

export const routes: Routes = [
  { path: "", component: SeriesesComponent },
  { path: "serieses", component: SeriesesComponent },
  { path: "series-details/:id", component: SeriesDetailsComponent },
  { path: "**", redirectTo: "" }
];
