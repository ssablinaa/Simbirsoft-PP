import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  menuItems = [
    { label: 'Главная', link: '' },
    { label: 'Музыка', link: '/music' },
    { label: 'Искусство', link: '/art' },
    { label: 'Танец', link: '/dance' },
    { label: 'Спорт', link: '/sport' },
    { label: 'Игры', link: '/games' },
    { label: 'Фильмы', link: '/films' },
    { label: 'Комиксы', link: '/comics' },
  ];
}
