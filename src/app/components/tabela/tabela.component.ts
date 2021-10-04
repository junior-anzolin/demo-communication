import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

export class ColumnTable {
  label!: string;
  value!: string;
  prefix?: string;
  suffix?: string;
  typeFormat?: 'date';
  optionFormat?:
    | 'short'
    | 'medium'
    | 'long'
    | 'full'
    | 'shortDate'
    | 'mediumDate'
    | 'longDate'
    | 'fullDate'
    | 'shortTime'
    | 'mediumTime'
    | 'longTime'
    | 'fullTime'
    | 'dd/MM/yyyy HH:mm';
  type?: 'boolean' | 'function';
  functionToCall?: (value: any) => string;
}

export class ColumnActionTable {
  labelColumn?: string;
  label!: string;
  action!: string;
  value!: string;
  classStyle!: 'primary' | 'accent' | 'warn' | null | undefined;
  disabled?: string;
}

export class ActionTableButton {
  action!: string;
  value!: any;
}

export class ActionChangePage {
  page!: number;
  max!: number;
}

@Component({
  selector: 'tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.scss'],
})
export class TabelaComponent implements OnInit {
  private _columnsAction: Array<ColumnActionTable> = [];
  private _columns: Array<ColumnTable> = [];
  private _data: Array<any> = [];
  private _pagination = false;
  private _pageLength = 0;
  private _pageSizeOptions: number[] = [5, 10, 25, 100];
  private _pageSize = 10;

  @Input() set columnsAction(value: Array<ColumnActionTable>) {
    value.forEach((coluna: ColumnActionTable) => {
      this.displayedColumns.push(coluna.action);
    });
    this._columnsAction = value;
  }
  get columnsAction() {
    return this._columnsAction;
  }
  @Input() set columns(value: Array<ColumnTable>) {
    value.forEach((coluna: ColumnTable) => {
      this.displayedColumns.push(coluna.value);
    });
    this._columns = value;
  }
  get columns() {
    return this._columns;
  }
  @Input() set data(value: Array<any>) {
    this._data = value;
  }
  get data() {
    return this._data;
  }

  @Input() set pagination(value: boolean) {
    this._pagination = value ?? false;
  }
  get pagination() {
    return this._pagination;
  }

  @Input() set pageLength(value: number) {
    this._pageLength = value ?? 0;
  }
  get pageLength() {
    return this._pageLength;
  }
  @Input() pageSizeOptions: number[] = [5, 10, 25, 100];
  @Input() set pageSize(value: number) {
    this._pageSize = value ?? 10;
  }
  get pageSize() {
    return this._pageSize;
  }

  @Output() actionEvent: EventEmitter<ActionTableButton> = new EventEmitter();
  @Output() actionChangePage: EventEmitter<ActionChangePage> =
    new EventEmitter();
  @Output() eventClickRow: EventEmitter<any> = new EventEmitter();

  displayedColumns: Array<string> = [];

  constructor() {}

  ngOnInit() {}

  action(action: string, value: any, element: any, i: number) {
    if (value === '@all') value = { ...element, indexValue: i };
    else if (value === '@index') value = i;
    else value = element[value];
    this.actionEvent.emit({
      action,
      value,
    });
  }

  changePage(event: any) {
    this.actionChangePage.emit({
      page: event.pageIndex * event.pageSize,
      max: event.pageSize,
    });
  }

  clickRow(row: any) {
    this.eventClickRow.emit(row);
  }

  value(element: any, coluna: ColumnTable) {
    let result = element[coluna.value];

    if (coluna.type) {
      switch (coluna.type) {
        case 'boolean':
          result = element[coluna.value] ? 'Sim' : 'Não';
          break;

        case 'function':
          if (coluna?.functionToCall) {
            result = coluna?.functionToCall(element[coluna.value]);
          }
          break;
      }
    }
    if (coluna.prefix) {
      result = `${coluna.prefix}${result}`;
    }
    if (coluna.suffix) {
      result = `${result}${coluna.suffix}`;
    }

    return result;
  }

  checkDisabled(coluna: any, value: any) {
    if (coluna.disabled) {
      let toCompare = coluna.disabled;
      this.columns.map((column) => {
        toCompare = toCompare
          .split(`:${column?.value}`)
          .join(`${value[column?.value]}`);
      });
      return eval(toCompare);
    } else {
      return false;
    }
  }

  isMatIcon(itemLabel: string) {
    const [defined] = itemLabel.split('::');
    return defined === 'matIcon';
  }

  matIcon(itemLabel: string) {
    const [, icon] = itemLabel.split('::');
    return icon;
  }
}
