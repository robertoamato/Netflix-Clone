import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { FooterComponent } from './components/footer/footer.component';
import { FooterComponent_1 as FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [HeaderComponent, HeroComponent, MovieListComponent, FooterComponent, FooterComponent_1],
})
export class AppComponent {}