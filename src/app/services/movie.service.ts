import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Movie {
  id: number;
  title: string;
  image: string;
  description: string;
}

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private movies: Movie[] = [
    {
      id: 1,
      title: 'Filme 1',
      image: 'https://via.placeholder.com/200x300',
      description: 'Sinopse do Filme 1.',
    },
    {
      id: 2,
      title: 'Filme 2',
      image: 'https://via.placeholder.com/200x300',
      description: 'Sinopse do Filme 2.',
    },
    {
      id: 3,
      title: 'Filme 3',
      image: 'https://via.placeholder.com/200x300',
      description: 'Sinopse do Filme 3.',
    },
    {
      id: 4,
      title: 'Filme 4',
      image: 'https://via.placeholder.com/200x300',
      description: 'Sinopse do Filme 4.',
    },
  ];

  getMovies(): Observable<Movie[]> {
    return of(this.movies);
  }

  getFeaturedMovie(): Observable<Movie> {
    return of(this.movies[0]);
  }
}