import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'default-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() title: string = 'Title';
  @Input() subtitle?: string;
  @Input() labelBtn?: string;
  @Input() refreshBtn?: boolean;
  @Input() searchInput?: boolean;
  @Input() secondaryButton?: string;

  @Output() clickBtn: EventEmitter<any> = new EventEmitter();
  @Output() clickRefreshBtn: EventEmitter<any> = new EventEmitter();
  @Output() changeSearchInputValue: EventEmitter<any> = new EventEmitter();
  @Output() clickSecondaryBtn: EventEmitter<any> = new EventEmitter();
  searchControl: FormControl = new FormControl('');

  constructor() {}

  get valueSearch() {
    return this.searchControl.value;
  }

  ngOnInit() {
    this.searchControl.valueChanges
      .pipe(debounceTime(250))
      .subscribe((value: any) => this.changeSearchInputValue.emit(value));
  }

  clearSearch() {
    this.searchControl.setValue('');
  }
}
