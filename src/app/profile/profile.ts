import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {

  username:string|null="";
  constructor(private route:ActivatedRoute){}

  ngOnInit()
  {   //1  

    // this.username= this.route.snapshot.paramMap.get('name');
    // console.log(this.username);

    //2

    // this.route.queryParams.subscribe(params=>{
    //   this.username=(params['name']);
    // })

    //3
    this.route.data.subscribe(param=>{
      console.log(param['name']);

      this.username=param['name'];
    })
  }

}
