import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  propertyOne: string = 'My first project Angular and my favorite dog ';

  patronSrc: string = 'assets/patron.jpg';
  patronWidth: number = 300;
}
