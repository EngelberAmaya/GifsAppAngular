import { HttpClient } from '@angular/common/http';
import { computed, effect, inject, Injectable, signal } from '@angular/core';
import { environment } from '@environments/environment';
import type { GiphyResponse } from '../interfaces/giphy';
import { Gif } from '../interfaces/gif';
import { GifMapper } from '../mapper/gif.mapper';
import { catchError, delay, map, Observable, tap, throwError } from 'rxjs';

const GIF_KEY = 'gifSearchHistory';

const loadFromLocalStorage = () => {
  const gifsFromLocalStorage = localStorage.getItem(GIF_KEY) ?? '{}';
  return JSON.parse(gifsFromLocalStorage);
};

@Injectable({
  providedIn: 'root',
})
export class Gifs {

  private http = inject(HttpClient);

  trendingGifs = signal<Gif[]>([]);
  trendingGifsLoading = signal(false);
  private trendingPage = signal(0);

  searchHistory = signal<Record<string, Gif[]>>(loadFromLocalStorage());
  searchHistoryKeys = computed(() => Object.keys(this.searchHistory()));

  trendingGifGroup = computed<Gif[][]>(() => {
    const groups = [];
    for (let i = 0; i < this.trendingGifs().length; i += 3) {
      groups.push(this.trendingGifs().slice(i, i + 3));
    }
    return groups;
  })

  constructor() {
    this.loadTrendingGifs();
  }

  loadTrendingGifs(){
    // Limitar a máximo 3 páginas
    if (this.trendingGifsLoading() || this.trendingPage() >= 3) return;

    this.trendingGifsLoading.set(true);

    this.http.get<GiphyResponse>(`${environment.giphyUrl}/gifs/trending`, {
      params: {
        api_key: environment.giphyApiKey,
        limit: 20,
        offset: this.trendingPage() * 20
      }
    }).subscribe(resp => {
      const gifs = GifMapper.mapGiphyItemsToGifsArray(resp.data);
      this.trendingGifs.update((currentGifs) => [...currentGifs, ...gifs]);
      this.trendingPage.update(page => page + 1);
      this.trendingGifsLoading.set(false);
    }, error => {
      console.log('Error fetching', error);
      return throwError(() => new Error('No se pudo obtener los gifs trending'));
    })
  }

  searchGifs(query: string): Observable<Gif[]> {
    return this.http.get<GiphyResponse>(`${environment.giphyUrl}/gifs/search`, {
      params: {
        api_key: environment.giphyApiKey,
        limit: 20,
        q: query
      }
    }).pipe(
      map(resp => GifMapper.mapGiphyItemsToGifsArray(resp.data)),
      // Historial
      tap((items) => {

        if(items.length === 0) return;

        this.searchHistory.update((history) => ({
          ...history,
          [query.toLowerCase()]: items
        }))
      }),
      delay(1000),
      catchError(error => {
        console.log('Error fetching', error);
        return throwError(() => new Error(`No se pudo obtener el gifs con ese nombre: ${query}`));
      })
    )
  }

  getGifsByQuery(query: string): Gif[] {
    return this.searchHistory()[query] || [];
  }

  saveGifsToLocalStorage = effect(() => {
    const historyString = JSON.stringify(this.searchHistory());
    localStorage.setItem(GIF_KEY, historyString);
  })

}
