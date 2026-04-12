import { AfterViewInit, Component, ElementRef, inject, viewChild } from '@angular/core';
import { Gifs } from '../../services/gifs';
import { ScrollState } from 'src/app/shared/services/scroll-state';

@Component({
  selector: 'app-trending-page',
  imports: [],
  templateUrl: './trending-page.html',
  styleUrl: './trending-page.css',
})
export default class TrendingPage implements AfterViewInit {

  gifService = inject(Gifs);
  scrollStateService = inject(ScrollState);

  scrollDivRef = viewChild<ElementRef>('groupDiv')

  ngAfterViewInit(): void {
    const scrollDiv = this.scrollDivRef()?.nativeElement as HTMLElement;

    if (!scrollDiv) return;

    scrollDiv.scrollTop = this.scrollStateService.trendingScrollState();
  }

  onScroll(event: Event) {
    const scrollDiv = this.scrollDivRef()?.nativeElement as HTMLElement;

    if (!scrollDiv) return;

    const scrollTop = scrollDiv.scrollTop;
    const clientHeight = scrollDiv.clientHeight;
    const scrollHeight = scrollDiv.scrollHeight;

    const isAtBottom = scrollTop + clientHeight + 300 >= scrollHeight;
    this.scrollStateService.trendingScrollState.set(scrollTop);

    if (isAtBottom) {
      this.gifService.loadTrendingGifs();
    }
  }

}
