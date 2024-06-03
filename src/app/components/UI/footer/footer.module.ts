import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FooterComponent } from './footer.component';
import { NgFor } from '@angular/common';

@NgModule({
  declarations: [FooterComponent],
  imports: [MatToolbarModule, NgFor],
  exports: [FooterComponent],
})
export class FooterModule {}
