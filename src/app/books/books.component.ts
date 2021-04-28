import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BooksService } from '../shared/services/books.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  genere: string = null;
  books: any = null;

  subscription: any;

  next: string = '';

  searchQuery: string = '';

  scrollCheck: boolean = false;


  constructor(
    private bookService: BooksService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {

    // Adds scroll event listener which calles this.scroll()
    window.addEventListener('scroll', this.scroll, true);

    this.genere = this.route.snapshot.paramMap.get('genere');

    this.subscription = this.bookService.getBooksByGenere(this.genere).subscribe(
      res => {
        this.next = res.next;
        this.books = res.results;
      },
      (err) => console.log(err)
    );
  }

  // Back to the home page
  back() {
    this.searchQuery = '';
    this.router.navigate(['/']);
  }

  // Search based on User's search query
  search() {
    this.bookService.searchBooks(this.searchQuery, this.genere).subscribe(
      (res: any) => {
        this.books = res.results;
      },
      (err) => console.log(err)
    )
  }

  // Handles scroll event. Calls API and adds new data to 'books[]'
  scroll = (event) => {

    // Check if user has scrolled to bottom
    if($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
      // Unbind the scroll event handler
      $(window).unbind('scroll');
      
      this.subscription = this.bookService.getNextBooks(this.next, this.searchQuery).subscribe(
        (res: any) => {
          this.subscription.unsubscribe();
          if (this.next === res.next) {
          } else {
            this.next = res.next;
            this.books.push(...res.results);
          }
        }
      );
    }
  }

}
