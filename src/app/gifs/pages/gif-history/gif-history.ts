import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { Gifs } from '../../services/gifs';
import { GifsList } from "../../components/gifs-list/gifs-list";

@Component({
  selector: 'app-gif-history',
  imports: [GifsList],
  templateUrl: './gif-history.html',
  styleUrl: './gif-history.css',
})
export default class GifHistory {

  gifService = inject(Gifs);

  query = toSignal((inject(ActivatedRoute).params.pipe(
    map(params => params['query'])))
  );

  gifsByKey = computed(() => this.gifService.getGifsByQuery(this.query()));

}


