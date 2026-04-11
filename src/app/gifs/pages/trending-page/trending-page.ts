import { Component, inject } from '@angular/core';
//import { GifsList } from '../../components/gifs-list/gifs-list';
import { Gifs } from '../../services/gifs';

@Component({
  selector: 'app-trending-page',
  imports: [/*GifsList*/],
  templateUrl: './trending-page.html',
  styleUrl: './trending-page.css',
})
export default class TrendingPage {

  gifService = inject(Gifs);

}
