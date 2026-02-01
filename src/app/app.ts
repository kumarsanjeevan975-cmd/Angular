import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from './login/login';
import { Signup } from './signup/signup';
import { CounterApp } from './counter-app/counter-app';
import { EventControl } from './event-control/event-control';
import { GetSetValue } from './get-set-value/get-set-value';
// import { CssAngular } from './IFELSE/css-angular';
import { IfELSE } from './if-else/if-else';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Login,Signup,EventControl,GetSetValue,IfELSE],
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
