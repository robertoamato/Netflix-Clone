import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieService, Movie } from '../../services/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class MovieListComponent implements OnInit {
  movies: Movie[] = [];

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movieService.getMovies().subscribe((movies) => {
      this.movies = movies;
    });
  }
}