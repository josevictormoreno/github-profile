import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  class: string = 'row col-12'
  text: string = 'col-6 text'
  image: string = 'col-6 image'

  constructor(public router: Router,
              public username: MatDialog) { }

  ngOnInit(): void {
    if (window.innerWidth < 700) {
      this.class = 'row col-12 home'
      this.image = 'col-11 image'
      this.text = 'col-11 text'
    }
  }

  openDialog(): void {
    this.username.open(Dialog, {
      width: '16rem',
    });
  }
}

@Component({
  selector: 'username',
  templateUrl: 'dialog.html',
})
export class Dialog {
  username: FormControl = new FormControl('')

  constructor(public router: Router){}

  getStarted(){
    if (this.username){
      console.log('entrou')
      this.router.navigate(['/profile/' + this.username.value])
    }
  }
}
