import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  baseUrl: string = 'http://skunkworks.ignitesol.com:8000'

  constructor(private http: HttpClient) { }

  // Fetch Books with mime_type image by Genre
  getBooksByGenere (genere): Observable<any> {
    return this.http.get(`${this.baseUrl}/books/?topic=${genere}&mime_type=image%2Fjpeg`)
  }

  // Fetch next set of books when user scrolls.
  getNextBooks(url, query) {
    if(query && query !== '') {
      return this.http.get(`${url}&mime_type=image%2Fjpeg&search=${query}`);
    }
    return this.http.get(`${url}&mime_type=image%2Fjpeg`);
  }

  // Fetch books based on search query
  searchBooks(text, genre) {
    if(text !== '') {
      return this.http.get(`${this.baseUrl}/books?mime_type=image%2Fjpeg&topic=${genre}&search=${text}`)
    }
    return this.getBooksByGenere(genre);
  } 
}
