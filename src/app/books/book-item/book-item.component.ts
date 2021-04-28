import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss']
})
export class BookItemComponent implements OnInit {

  @Input() book: any;

  constructor() { }

  ngOnInit(): void { }

  // Validate and Open external links 
  open(formats) {
    if(formats['text/html; charset=iso-8859-1'] && !formats['text/html; charset=iso-8859-1'].includes('.zip')) {
      window.open(formats['text/html; charset=iso-8859-1'], '_blank');
    } else if(formats['text/html; charset=utf-8'] && !formats['text/html; charset=utf-8'].includes('.zip')) {
      window.open(formats['text/html; charset=utf-8'], '_blank')
    } else if(formats['application/pdf'] && !formats['application/pdf'].includes('.zip')) {
      window.open(formats['application/pdf'], '_blank')
    } else if(formats['text/plain'] && !formats['text/plain'].includes('.zip')) {
      window.open(formats['text/plain'], '_blank')
    } else if(formats['text/plain; charset=iso-8859-1'] && !formats['text/plain; charset=iso-8859-1'].includes('.zip')) {
      window.open(formats['text/plain; charset=iso-8859-1'], '_blank')
    } else if(formats['text/plain; charset=utf-8'] && !formats['text/plain; charset=utf-8'].includes('.zip')) {
      window.open(formats['text/plain; charset=utf-8'], '_blank')
    }  else if(formats['text/plain; charset=us-ascii'] && !formats['text/plain; charset=us-ascii'].includes('.zip')) {
      window.open(formats['text/plain; charset=us-ascii'], '_blank')
    } else {
      alert("No viewable version available");
    }
  }

}
