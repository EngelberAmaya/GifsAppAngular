import { Component, ElementRef, inject, viewChild } from '@angular/core';
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

  scrollDivRef = viewChild<ElementRef>('groupDiv')

  onScroll(event: Event) {
    const scrollDiv = this.scrollDivRef()?.nativeElement as HTMLElement;
    console.log(scrollDiv);
  }

}
