import { Component } from '@angular/core';

@Component({
  selector: 'app-render-image',
  templateUrl: './render-image.component.html',
  styleUrls: ['./render-image.component.css'],
})
export class RenderImageComponent {
  patronSrc: string = 'assets/patron.jpg';
  patronWidth: number = 400;
}
