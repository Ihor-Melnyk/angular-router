import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css'],
})
export class PipesComponent {
  textOne = 'Пример текста';
  textTwo = 'ВЕРХНИЙ РЕГИСТР';

  varNumber = Math.PI;

  date: Date = new Date(1992, 8, 16);

  float: number = 0.55;

  obj = {
    a: 1,
    b: 'hihi',
    c: {
      f: 'hello',
      g: 55,
    },
  };
}
