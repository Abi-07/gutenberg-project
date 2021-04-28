import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.scss']
})
export class GenreComponent implements OnInit {

  @Input() icon: string = null;
  @Input() title: string = null;
  @Input() url: string = null;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigate(genere) {
    this.router.navigate(['/books', {genere: genere}])
  }


}
