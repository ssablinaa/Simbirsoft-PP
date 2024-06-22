import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthModalComponent } from '../../../auth-modal/auth-modal.component';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  constructor(
    public dialog: MatDialog,
    public userService: UserService,
  ) {}

  public openSign() {
    this.dialog.open(AuthModalComponent, {});
  }

  public logout() {
    this.userService.logout();
  }

  menuItems = [
    { label: 'Главная', link: '' },
    { label: 'Животные', link: '/animals' },
    { label: 'Музыка', link: '/music' },
    { label: 'Искусство', link: '/art' },
    { label: 'Танец', link: '/dance' },
    { label: 'Спорт', link: '/sport' },
    { label: 'Игры', link: '/games' },
    { label: 'Фильмы', link: '/films' },
    { label: 'Комиксы', link: '/comics' },
  ];
}
