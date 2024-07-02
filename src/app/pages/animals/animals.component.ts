import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AnimalsService } from '../../services/animals.service';
import { BehaviorSubject, finalize } from 'rxjs';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrl: './animals.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AnimalsComponent {
  a$ = this.animalsService.getAnimals();
  loading$ = new BehaviorSubject<boolean>(true);

  constructor(private animalsService: AnimalsService) {}
  headerItems = [
    { label: 'О нас', link: '/animals' },
    { label: 'Галерея', link: '/animals' },
    { label: 'Контакты', link: '/animals' },
  ];
}
