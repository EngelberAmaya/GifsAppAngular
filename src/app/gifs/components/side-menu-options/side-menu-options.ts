import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";
import { Gifs } from '../../services/gifs';

interface MenuOption {
  label: string;
  icon: string;
  route: string;
  subLabel: string;
}

@Component({
  selector: 'app-side-menu-options',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './side-menu-options.html',
  styleUrl: './side-menu-options.css',
})
export class SideMenuOptions {

  gifService = inject(Gifs);

  menuOptions: MenuOption[] =  [
    {
      icon: 'fa-solid fa-chart-line',
      label: 'Trending',
      subLabel: 'Gifs Populares',
      route: '/dashboard/trending',
    },
    {
      icon: 'fa-solid fa-magnifying-glass',
      label: 'Buscador',
      subLabel: 'Buscar Gifs',
      route: '/dashboard/search',
    }
  ]
}
