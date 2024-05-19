import { Component, Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../components/UI/header/header.component';
import { FooterComponent } from '../../components/UI/footer/footer.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {
  MatPaginatorIntl,
  MatPaginatorModule,
  PageEvent,
} from '@angular/material/paginator';
import { Subject } from 'rxjs';
import { Card } from './card';

@Injectable()
export class MyCustomPaginatorIntl implements MatPaginatorIntl {
  changes = new Subject<void>();

  firstPageLabel = $localize`First page`;
  itemsPerPageLabel = $localize`Items per page:`;
  lastPageLabel = $localize`Last page`;

  nextPageLabel = 'Следущая страница';
  previousPageLabel = 'Предыдущая страница';

  getRangeLabel(page: number, pageSize: number, length: number): string {
    if (length === 0) {
      return $localize`Страница 1 of 1`;
    }
    const amountPages = Math.ceil(length / pageSize);
    return $localize`Страница ${page + 1} из ${amountPages}`;
  }
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    FooterComponent,
    MatCardModule,
    MatButtonModule,
    MatPaginatorModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  providers: [{ provide: MatPaginatorIntl, useClass: MyCustomPaginatorIntl }],
})
export class HomeComponent {
  public cards: Card[] = [
    {
      title: 'Массажный салон',
      imageSrc: './assets/images/card2.png',
      altText: 'Photo of a massage',
      buttonText: 'Подробнее',
    },
    {
      title: 'Ювелирный магазин',
      imageSrc: './assets/images/card3.png',
      altText: 'Photo of a greased',
      buttonText: 'Подробнее',
    },
    {
      title: 'Набор 3D материалов',
      imageSrc: './assets/images/card4.png',
      altText: 'Photo of a 3D',
      buttonText: 'Подробнее',
    },
    {
      title: 'Посуда для дома',
      imageSrc: './assets/images/card5.png',
      altText: 'Photo of a dishes',
      buttonText: 'Подробнее',
    },
    {
      title: 'Интернет-магазин обуви',
      imageSrc: './assets/images/card6.png',
      altText: 'Photo of shoes',
      buttonText: 'Подробнее',
    },
    {
      title: 'Интернет-магазин одежды',
      imageSrc: './assets/images/card7.png',
      altText: 'Photo of clothes ',
      buttonText: 'Подробнее',
    },
    {
      title: 'Кулинарное шоу',
      imageSrc: './assets/images/card8.png',
      altText: 'Photo of food',
      buttonText: 'Подробнее',
    },
    {
      title: 'Магазин постельного белья',
      imageSrc: './assets/images/card9.png',
      altText: 'Photo of a bed',
      buttonText: 'Подробнее',
    },
  ];
  public cardsSlice = this.cards.slice(0, 4);

  OnPageChange(event: PageEvent) {
    console.log(event);
    const startindex = event.pageIndex * event.pageSize;
    let endIndex = startindex + event.pageSize;
    if (endIndex > this.cards.length) {
      endIndex = this.cards.length;
    }
    this.cardsSlice = this.cards.slice(startindex, endIndex);
  }
}
