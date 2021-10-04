import { Component } from '@angular/core';
import { SidenavService } from './services/sidenav.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private readonly sidenavService: SidenavService) {}

  get title() {
    return this.sidenavService.title;
  }

  get sidenavItems() {
    return this.sidenavService.sidenavItems;
  }
}
