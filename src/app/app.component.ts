import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush, // при Default дочерний компонент обновляется каждый раз, когда обновляется родительский,
  // даже если изменение родительского компонента не влияет на дочерний
  // при использвании OnPush данные дочернего компонента будут обновляться только тогда, когда
  // изменения передаются из родительского в дочерний
})
export class AppComponent {}
