import { Component } from '@angular/core';

@Component({
  selector: 'app-task2',
  templateUrl: './task2.component.html',
  styleUrls: ['./task2.component.css'],
})
export class Task2Component {
  image: string[] = [
    'https://pixabay.com/get/gd163bad5a678cc724349273669fa9daa1c10307219783be61d5f5001abea0835589db6891398a81ea97fb64d9a69a337bd6d1f4be27b3704247c3c63ac81720b_640.jpg',
    'https://pixabay.com/get/g846ad6e849bbed9962f74c1de5d2e51254221f92d6948ab75aae06bf9192db9ad3e0a3099727d9194a551ea92bb3cec7526e0b84bdeeed7970246ba7e7841f91_640.jpg',
    'https://pixabay.com/get/gc4780b537a71a10ed3302c7df2ce055a19b696624b13ffcb327481eaa6245527a92706366e234401cba3cad9f2ef623a9bde7ae050aa390a7993c2ae29e3857b_640.jpg',
    'https://pixabay.com/get/g501b1b4d6d8c23dc336dd73861494308c6e6b53986471b417e45da2550c2da835b7d880072262be564991ae896557591ea570bca33c24dc56303978a5069194a_640.jpg',
    'https://pixabay.com/get/g5cf2c315c6b925b31c60565e783db7aa3b517907314962001d3b2810db4a997244536100cded010f674fa708ce37a9da92a64804b6104cc655dde3e82267b7a1_640.jpg',
  ];
  index: number = 0;
  patronSrc: string = this.image[this.index];

  increment() {
    if (this.image.length - 1 <= this.index) {
      return;
    }

    this.index += 1;
    this.patronSrc = this.image[this.index];
  }

  decrement() {
    if (this.index <= 0) {
      return;
    }

    this.index -= 1;
    this.patronSrc = this.image[this.index];
  }

  imgWidth: number = 600;
}
