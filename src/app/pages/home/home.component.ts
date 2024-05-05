import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/UI/header/header.component';
import { FooterComponent } from '../../components/UI/footer/footer.component';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, MatCardModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
