import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-input-radio',
  templateUrl: './input-radio.component.html',
  styleUrls: ['./input-radio.component.css'],
})
export class InputRadioComponent {
  colorText = 'black';
  @HostListener('click', ['$event.target.value'])
  onClick(input: 'input[name="tag"]') {
    if (input) this.colorText = input;
  }
}
