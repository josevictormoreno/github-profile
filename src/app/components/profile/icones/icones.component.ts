import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-icones',
  templateUrl: './icones.component.html',
  styleUrls: ['./icones.component.scss']
})
export class IconesComponent implements OnInit {
  instagram: FormControl = new FormControl('')
  twitter: FormControl = new FormControl('')
  linkedin: FormControl = new FormControl('')
  gmail: FormControl = new FormControl('')

  constructor() { }

  ngOnInit(): void {
  }

}
