import { Component } from '@angular/core';

@Component({
  selector: 'app-get-set-value',
  imports: [],
  templateUrl: './get-set-value.html',
  styleUrl: './get-set-value.css',
})
export class GetSetValue {

  name=" ";
  displayname=" ";
  getValue(event:Event)
  {   
    // console.log("button click");
    // const val=((event.target as HTMLInputElement));
    // console.log(val);
    const name=(event.target as HTMLInputElement).value;
    console.log(name);
    this.name=name;
  }

  displayValue()
  {
    this.displayname=this.name;
  }


  // Email Function

  getEmail(val:string)
  {
    console.log(val);
  }

}
