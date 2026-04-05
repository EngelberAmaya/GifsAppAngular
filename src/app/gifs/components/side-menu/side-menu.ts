import { Component } from '@angular/core';
import { SideMenuOptions } from '../side-menu-options/side-menu-options';
import { SideMenuHeader } from '../side-menu-header/side-menu-header';

@Component({
  selector: 'app-side-menu',
  imports: [SideMenuHeader, SideMenuOptions],
  templateUrl: './side-menu.html',
  styleUrl: './side-menu.css',
})
export class SideMenu {

}
