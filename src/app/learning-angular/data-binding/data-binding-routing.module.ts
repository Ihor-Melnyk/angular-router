import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataBindingComponent } from './data-binding.component';
import { RenderImageComponent } from './render-image/render-image.component';
import { SliderComponent } from './slider/slider.component';

const routes: Routes = [
  {
    path: '3-data-binding',
    component: DataBindingComponent,
    // children: [
    //   { path: 'render-image', component: RenderImageComponent },
    //   { path: 'slider', component: SliderComponent },
    // ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DataBindingRoutingModule {}
