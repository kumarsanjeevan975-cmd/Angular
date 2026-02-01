import { Component, computed, effect, signal } from '@angular/core';
import { single } from 'rxjs';

@Component({
  selector: 'app-compsignals',
  imports: [],
  templateUrl: './compsignals.html',
  styleUrl: './compsignals.css',
})
export class Compsignals {

  const=signal(10);
  x=10;

  // constructor()
  // {
  //   effect(()=>{
  //     console.log(this.const(  ));
  //   })
  // }

  update()
  {
    this.const.set(this.const()+1);
  }



  // computed
  a=signal(10);
  y=signal(3);
  z=computed(()=>this.a()+this.y());

  //computed signal ko forcefully change nhi kiya ja skta hai but condition ke basis pe ye yaha change ho rha hai
  calculate()
  {
    console.log(this.z()); //13
    this.a.set(100);
     console.log(this.z()); 103
  }


  //useeffect
  username=signal("sam");
 num=signal(0);
  isdisplay=false;
  
  constructor(){
    effect(()=>{
    if(this.num()==2)
    {
      this.isdisplay=true;
      setTimeout(()=>{
        this.isdisplay=false;
      },2000)
    }
    else{
      this.isdisplay=false;
    }
  })
  }

  effectinc(){
    this.num.set(this.num()+1);
  }

}
