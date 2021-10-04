import { Component, OnInit } from '@angular/core';
import { ColumnTable } from 'src/app/components/tabela/tabela.component';
import { SidenavService } from 'src/app/services/sidenav.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  columns: ColumnTable[] = [
    {
      label: 'Nome',
      value: 'name',
    },
    {
      label: 'Idade',
      value: 'age',
    },
  ];
  dataList: any[] = [
    { name: 'Alex', age: 19 },
    { name: 'Liam', age: 22 },
    { name: 'Noah', age: 18 },
    { name: 'Emma', age: 20 },
  ];
  lengthData: number = 4;

  constructor(private readonly sidenavService: SidenavService) {
    this.sidenavService.title = 'Listar';
  }

  ngOnInit(): void {}

  requestData(event: any = {}) {
    console.log(event);
  }

  open(event: any) {
    console.log(event);
  }

  new() {
    console.log('New Event');
  }
}
