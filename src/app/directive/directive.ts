import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-directive',
  imports: [NgIf],
  templateUrl: './directive.html',
  styleUrl: './directive.css',
})
export class DirectiveCom {
    display=true;
}
