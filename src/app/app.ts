import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Login } from './login/login';
import { Signup } from './signup/signup';
import { CounterApp } from './counter-app/counter-app';
import { EventControl } from './event-control/event-control';
import { GetSetValue } from './get-set-value/get-set-value';
// import { CssAngular } from './IFELSE/css-angular';
import { IfELSE } from './if-else/if-else';
import { Compsignals } from './compsignals/compsignals';
import { Contexual } from './contexual/contexual';
import { TwoWayBindingsAng } from './two-way-binding/two-way-binding';
import { ToDoList } from './to-do-list/to-do-list';
import { Directive } from '@angular/compiler';
import { DirectiveCom } from './directive/directive';
import { Header } from './header/header';
import { Home } from './home/home';
// import { Profile } from './profile/profile';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink,Login,Signup,EventControl,GetSetValue,IfELSE,Compsignals,Contexual,TwoWayBindingsAng,ToDoList,DirectiveCom,Header,Home],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = 'sajeevan';
  x=4;
  y=5;

  handleClick()
  {
    alert("click to continue");
  }
}
