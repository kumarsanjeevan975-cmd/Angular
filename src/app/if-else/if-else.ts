import { Component } from '@angular/core';

@Component({
  selector: 'app-if-else',
  imports: [],
  templateUrl: './if-else.html',
  styleUrl: './if-else.css',
})
export class IfELSE {

    display=false;

      DIvwhide=false;

    
    hide()
    {
      this.DIvwhide=true;
    }

    show()
    {
      this.DIvwhide=false;
    }

// mange div visibility with one button 

      togglediv=true;

      toggle()
      {
        this.togglediv=!this.togglediv;
      }


}
