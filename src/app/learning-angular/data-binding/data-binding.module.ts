import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataBindingRoutingModule } from './data-binding-routing.module';
import { RenderImageComponent } from './render-image/render-image.component';
import { SliderComponent } from './slider/slider.component';
import { DataBindingComponent } from './data-binding.component';


@NgModule({
  declarations: [
    RenderImageComponent,
    SliderComponent,
    DataBindingComponent
  ],
  imports: [
    CommonModule,
    DataBindingRoutingModule
  ]
})
export class DataBindingModule { }
