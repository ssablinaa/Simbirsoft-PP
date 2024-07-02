import { NgModule } from '@angular/core';
import { AnimalsComponent } from './animals.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { routes } from '../../app.routes';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [AnimalsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatToolbarModule,
    MatIconModule,
    HttpClientModule,
    MatSidenavModule,
    MatProgressSpinnerModule,
  ],
  exports: [AnimalsComponent],
})
export class AnimalsModule {}
