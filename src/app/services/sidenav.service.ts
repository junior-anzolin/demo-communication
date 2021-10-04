import { Injectable } from '@angular/core';

export interface SidenavItem {
  label: string;
  route: string;
  icon: string;
}

@Injectable({
  providedIn: 'root',
})
export class SidenavService {
  private _title: string = 'Title';
  private _sidenavItems: SidenavItem[] = [
    {
      label: 'Listar',
      route: 'list',
      icon: 'format_list_bulleted',
    },
    {
      label: 'Criar',
      route: 'handle',
      icon: 'add',
    },
  ];

  constructor() {}

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get sidenavItems(): SidenavItem[] {
    return this._sidenavItems;
  }

  set sidenavItems(value: SidenavItem[]) {
    this._sidenavItems = value;
  }
}
