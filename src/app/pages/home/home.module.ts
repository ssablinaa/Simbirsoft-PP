import { NgModule } from '@angular/core';
import { HomeComponent, MyCustomPaginatorIntl } from './home.component';
import { BrowserModule } from '@angular/platform-browser';
import { FooterModule } from '../../components/UI/footer/footer.module';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../components/UI/header/header.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {
  MatPaginatorIntl,
  MatPaginatorModule,
} from '@angular/material/paginator';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    BrowserModule,
    FooterModule,
    CommonModule,
    HeaderComponent,
    MatCardModule,
    MatButtonModule,
    MatPaginatorModule,
  ],
  providers: [{ provide: MatPaginatorIntl, useClass: MyCustomPaginatorIntl }],
  bootstrap: [],
})
export class HomeModule {}
