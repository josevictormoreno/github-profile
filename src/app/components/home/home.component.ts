import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  class: string = 'row col-12'
  text: string = 'col-6 text'
  image: string = 'col-6 image'

  constructor(public router: Router) { }

  ngOnInit(): void {
    if (window.innerWidth < 700)
    {
      this.class = 'row col-12 home'
      this.image = 'col-11 image'
      this.text = 'col-11 text'
    }
  }
}
