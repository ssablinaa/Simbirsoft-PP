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
      title: 'Shiba Inu',
      imageSrc: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      altText: 'Photo of a Shiba Inu',
      buttonText: 'Перейти в каталог',
    },
    {
      title: 'Shiba Inu2',
      imageSrc: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      altText: 'Photo of a Shiba Inu',
      buttonText: 'Перейти в каталог',
    },
    {
      title: 'Shiba Inu3',
      imageSrc: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      altText: 'Photo of a Shiba Inu',
      buttonText: 'Перейти в каталог',
    },
    {
      title: 'Shiba Inu4',
      imageSrc: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      altText: 'Photo of a Shiba Inu',
      buttonText: 'Перейти в каталог',
    },
    {
      title: 'Shiba Inu5',
      imageSrc: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      altText: 'Photo of a Shiba Inu',
      buttonText: 'Перейти в каталог',
    },
    {
      title: 'Shiba Inu6',
      imageSrc: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      altText: 'Photo of a Shiba Inu',
      buttonText: 'Перейти в каталог',
    },
    {
      title: 'Shiba Inu7',
      imageSrc: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      altText: 'Photo of a Shiba Inu',
      buttonText: 'Перейти в каталог',
    },
    {
      title: 'Shiba Inu8',
      imageSrc: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      altText: 'Photo of a Shiba Inu',
      buttonText: 'Перейти в каталог',
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
