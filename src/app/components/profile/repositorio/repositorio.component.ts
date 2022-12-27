import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-repositorio',
  templateUrl: './repositorio.component.html',
  styleUrls: ['./repositorio.component.scss']
})
export class RepositorioComponent implements OnInit {
  username: string = ''
  constructor() { }

  ngOnInit(): void {
  }

}
