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
  isLoggedIn = false;
  constructor(
    public dialog: MatDialog,
    private userService: UserService,
  ) {
    this.userService.isLoggedIn().subscribe((loggedIn) => {
      this.isLoggedIn = loggedIn;
    });
  }

  openSign(): void {
    this.dialog.open(AuthModalComponent, {});
  }
  logout() {
    this.userService.logout();
  }
  login() {
    this.userService.login();
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
