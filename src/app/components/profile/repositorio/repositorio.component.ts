import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-repositorio',
  templateUrl: './repositorio.component.html',
  styleUrls: ['./repositorio.component.scss']
})
export class RepositorioComponent implements OnInit {
  username: string = ''
  constructor(public activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const username = this.activatedRoute.snapshot.paramMap.get('username')
    if(username)
      this.username = username
    
  }

}
