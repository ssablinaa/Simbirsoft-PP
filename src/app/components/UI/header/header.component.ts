import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthModalComponent } from '../../../auth-modal/auth-modal.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  constructor(public dialog: MatDialog) {}

  openSign(): void {
    this.dialog.open(AuthModalComponent, {
      width: '600px',
      height: '500px',
      maxWidth: '80vw',
      maxHeight: '50vh',
    });
  }
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
