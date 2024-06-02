import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../../../pages/home/home.component';
export const routes: Routes = [
  { path: 'art', component: HomeComponent },
  { path: 'music', component: HomeComponent },
  { path: 'dance', component: HomeComponent },
  { path: 'sport', component: HomeComponent },
  { path: 'games', component: HomeComponent },
  { path: 'films', component: HomeComponent },
  { path: 'comics', component: HomeComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutes {}
