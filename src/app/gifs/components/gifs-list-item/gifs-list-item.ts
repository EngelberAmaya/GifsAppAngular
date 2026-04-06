import { Component, input } from '@angular/core';

@Component({
  selector: 'app-gifs-list-item',
  imports: [],
  templateUrl: './gifs-list-item.html',
  styleUrl: './gifs-list-item.css',
})
export class GifsListItem {
  imageUrl = input.required<string>();
}
