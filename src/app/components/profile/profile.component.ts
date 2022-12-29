import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(public activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    const username = this.activatedRoute.snapshot.paramMap.get('username')
    if(!username)
      this.router.navigate(['/home']).then()
  }

}
