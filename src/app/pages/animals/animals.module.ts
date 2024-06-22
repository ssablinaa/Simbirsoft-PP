import { NgModule } from '@angular/core';
import { AnimalsComponent } from './animals.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [AnimalsComponent],
  imports: [CommonModule, MatToolbarModule, MatIconModule, HttpClientModule],
  exports: [AnimalsComponent],
})
export class AnimalsModule {}
