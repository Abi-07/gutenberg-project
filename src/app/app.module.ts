import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GenreComponent } from './shared/genre/genre.component';
import { BooksComponent } from './books/books.component';
import { SearchComponent } from './shared/search/search.component';
import { FormsModule } from '@angular/forms';
import { BooksService } from './shared/services/books.service';
import { BookItemComponent } from './books/book-item/book-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GenreComponent,
    BooksComponent,
    SearchComponent,
    BookItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [BooksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
