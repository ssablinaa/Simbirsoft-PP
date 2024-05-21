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
    BrowserAnimationsModule, //Самый главный модуль для анимации и роутинга, без него видим просто белый экран
    RouterModule.forRoot(routes), // таким способом указыаем использовать имеено эти роуты (вместо мусора в app.config.ts)
    BrowserModule, 
    RouterOutlet, 
    HomeModule, 
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
