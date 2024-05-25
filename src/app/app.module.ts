import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeModule } from './pages/home/home.module';
import { RouterModule, RouterOutlet } from '@angular/router';
import { routes } from './app.routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    BrowserModule,
    RouterOutlet,
    HomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
