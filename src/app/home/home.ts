import { ɵnormalizeQueryParams } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink,RouterOutlet],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
      constructor(private router:Router){}

      goProfile()
      {
          this.router.navigate(['profile'],{queryParams:{name:'sanjeevan kumar'}});
      }
}
