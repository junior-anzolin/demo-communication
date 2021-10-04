import { Component, OnInit } from '@angular/core';
import { SidenavService } from 'src/app/services/sidenav.service';

@Component({
  selector: 'app-handle',
  templateUrl: './handle.component.html',
  styleUrls: ['./handle.component.scss'],
})
export class HandleComponent implements OnInit {
  constructor(private readonly sidenavService: SidenavService) {
    this.sidenavService.title = 'Criar';
  }

  ngOnInit(): void {}
}
