import { Component } from '@angular/core';

@Component({
  selector: 'app-ul-ol',
  templateUrl: './ul-ol.component.html',
  styleUrls: ['./ul-ol.component.css'],
})
export class UlOlComponent {
  flagToggle = false;
  items = [122, 123, 124, 125];
}
