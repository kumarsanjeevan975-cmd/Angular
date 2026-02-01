import { Component } from '@angular/core';

@Component({
  selector: 'app-event-control',
  imports: [],
  templateUrl: './event-control.html',
  styleUrl: './event-control.css',
})
export class EventControl {

  onClick(event: MouseEvent) {
  console.log(event);
}

    onInput(event: Event) {
  const value = (event.target as HTMLInputElement).value;
  console.log(value);
}

//     onMouseEnter() {
//   console.log('Mouse entered the div');
// }

onMouseEnter(event: MouseEvent) {
  console.log('Mouse entered', event);
}

handlclick(event:Event)
{
    console.log("event is :",event);
    console.log(event.type);
    console.log((event.target as Element).className);
}

}
