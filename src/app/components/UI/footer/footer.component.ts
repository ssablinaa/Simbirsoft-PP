import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FooterSection } from '../../../interfaces/item.interface';
import { SocialIcon } from '../../../interfaces/item.interface';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  footerSections: FooterSection[] = [
    {
      title: 'Услуги',
      links: [
        { text: 'Размещение проекта', url: '#' },
        { text: 'Спонсировать проект', url: '#' },
        { text: 'Оставить резюме', url: '#' },
      ],
    },
    {
      title: 'О нас',
      links: [
        { text: 'Компания', url: '#' },
        { text: 'Команда', url: '#' },
        { text: 'История', url: '#' },
      ],
    },
    {
      title: 'Карьера',
      links: [
        { text: 'Вакансии', url: '#' },
        { text: 'Успехи сотрудников', url: '#' },
        { text: 'Преимущества', url: '#' },
      ],
    },
  ];

  socialIcons: SocialIcon[] = [
    { iconClass: 'fab fa-instagram', url: '#' },
    { iconClass: 'fab fa-snapchat', url: '#' },
    { iconClass: 'fab fa-twitter', url: '#' },
    { iconClass: 'fab fa-facebook', url: '#' },
  ];
}
