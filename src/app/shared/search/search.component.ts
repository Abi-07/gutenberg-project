import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Output() searchQuery = new EventEmitter<string>();

  query: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
