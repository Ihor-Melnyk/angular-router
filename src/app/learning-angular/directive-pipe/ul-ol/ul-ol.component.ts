import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-ul-ol',
  templateUrl: './ul-ol.component.html',
  styleUrls: ['./ul-ol.component.css'],
})
export class UlOlComponent {
  flagToggle = false;
  items = ['first', 'second', 'third', 'fourth'];
}
