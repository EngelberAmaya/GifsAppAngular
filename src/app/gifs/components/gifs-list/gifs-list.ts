import { Component, input } from '@angular/core';
import { GifsListItem } from '../gifs-list-item/gifs-list-item';
import { Gif } from '../../interfaces/gif';

@Component({
  selector: 'app-gifs-list',
  imports: [GifsListItem],
  templateUrl: './gifs-list.html',
  styleUrl: './gifs-list.css',
})
export class GifsList {
  gifs = input.required<Gif[]>();
  errorMessage = input<string | unknown | null>();
  isEmpty = input.required<boolean>();
  isLoading = input.required<boolean>();
}
