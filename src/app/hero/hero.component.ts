import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieService, Movie } from '../../services/movie.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class HeroComponent implements OnInit {
  featuredMovie: Movie | undefined;

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieService.getFeaturedMovie().subscribe((movie) => {
      this.featuredMovie = movie;
    });
  }
}