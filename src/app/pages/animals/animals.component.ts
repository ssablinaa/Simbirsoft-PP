import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AnimalsService } from '../../services/animals.service';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrl: './animals.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AnimalsComponent {
  a$ = this.animalsService.getAnimals();
  error: string | null = null;
  loading: boolean = false;

  constructor(private animalsService: AnimalsService) {}
}
