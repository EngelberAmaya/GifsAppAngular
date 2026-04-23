import { Component, inject, signal } from '@angular/core';
import { GifsList } from '../../components/gifs-list/gifs-list';
import { Gifs } from '../../services/gifs';
import { rxResource } from '@angular/core/rxjs-interop';
import { of } from 'rxjs';
import { SearchInput } from '../../components/search-input/search-input';

@Component({
  selector: 'app-search-page',
  imports: [GifsList, SearchInput ],
  templateUrl: './search-page.html',
  styleUrl: './search-page.css',
})
export default class SearchPage {

  gifService = inject(Gifs);

  query = signal<string>('');

  gifsResource = rxResource({
    params: () => ({ query: this.query() }),
    stream: ({params}) => {

      if(!params.query) return of([]);

      return this.gifService.searchGifs(params.query);
    }
  });

}
