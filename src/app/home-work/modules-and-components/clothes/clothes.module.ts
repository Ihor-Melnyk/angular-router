import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildrenComponent, MenComponent, WomenComponent } from './index';

@NgModule({
  declarations: [ChildrenComponent, MenComponent, WomenComponent],
  imports: [CommonModule],
})
export class ClothesModule {}
