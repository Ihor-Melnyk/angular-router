import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeWorkRoutingModule } from './home-work-routing.module';
import { DataBindingComponent } from './data-binding/data-binding.component';

@NgModule({
  declarations: [DataBindingComponent],
  imports: [CommonModule, HomeWorkRoutingModule],
})
export class HomeWorkModule {}
