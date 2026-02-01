import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-app',
  imports: [],
  templateUrl: './counter-app.html',
  styleUrl: './counter-app.css',
})
export class CounterApp {
  counter=0;

  sum()
  {
   this.counter=this.counter+1;
  }

  subtract()
  {
   this.counter=this. counter-1;

  }

  reset()
  {
   this.counter=0;
  }

  handleBtn(val:string)
  {
      if(val=='plus')
      {
        this.counter=this.counter+1;
      }
      else if(val=='minus')
      {
        this.counter =this.counter-1;
      }
      else{
        this.counter=0;
      }
  }

}
