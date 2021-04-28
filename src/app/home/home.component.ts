import { Component, OnInit } from '@angular/core';

interface Generes {
  title: string,
  icon: string
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  generes: Generes[] = [
    {
      title: 'Fiction',
      icon: 'Fiction.svg'
    },
    {
      title: 'Drama',
      icon: 'Drama.svg'
    },
    {
      title: 'Humor',
      icon: 'Humour.svg'
    },
    {
      title: 'Politics',
      icon: 'Politics.svg'
    },
    {
      title: 'Philosophy',
      icon: 'Philosophy.svg'
    },
    {
      title: 'History',
      icon: 'History.svg'
    },
    {
      title: 'Adventure',
      icon: 'Adventure.svg'
    }
  ]; 

  constructor() { }

  ngOnInit(): void {
  }

}
