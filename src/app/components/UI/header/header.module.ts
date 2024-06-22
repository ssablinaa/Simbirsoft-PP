import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header.component';
import { HomeComponent } from '../../../pages/home/home.component';
import { AnimalsComponent } from '../../../pages/animals/animals.component';

export const routes: Routes = [
  { path: 'animals', component: AnimalsComponent },
  { path: 'art', component: HomeComponent },
  { path: 'music', component: HomeComponent },
  { path: 'dance', component: HomeComponent },
  { path: 'sport', component: HomeComponent },
  { path: 'games', component: HomeComponent },
  { path: 'films', component: HomeComponent },
  { path: 'comics', component: HomeComponent },
];
@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSidenavModule,
  ],
  exports: [HeaderComponent],
})
export class HeaderModule {}
