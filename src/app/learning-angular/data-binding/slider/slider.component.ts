import { HostListener, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
})
export class SliderComponent implements OnInit {
  image: string[] = [
    './assets/dog-2640076__480.jpg',
    './assets/pug-2223195__480.jpg',
    './assets/pug-698659__480.jpg',
    './assets/swimming-1502563__480.jpg',
    './assets/the-pug-2454563__480.jpg',
  ];
  index: number = 0;
  patronSrc: string = this.image[this.index];

  increment() {
    this.index += 1;
    if (this.image.length <= this.index) {
      this.index = 0;
    }
    this.patronSrc = this.image[this.index];
  }

  decrement() {
    this.index -= 1;
    if (this.index < 0) {
      this.index = this.image.length - 1;
    }
    this.patronSrc = this.image[this.index];
  }

  @HostListener('window:keydown.ArrowRight', ['$event'])
  handleKeyDownRight(event: KeyboardEvent) {
    this.increment();
  }

  @HostListener('window:keydown.ArrowLeft', ['$event'])
  handleKeyDownLeft(event: KeyboardEvent) {
    this.decrement();
  }

  imgWidth: number = 600;

  ngOnInit() {}
}
