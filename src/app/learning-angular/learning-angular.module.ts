import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LearningAngularRoutingModule } from './learning-angular-routing.module';
import { LearningAngularComponent } from './learning-angular.component';
import { DataBindingModule } from './data-binding/data-binding.module';

@NgModule({
  declarations: [LearningAngularComponent],
  imports: [CommonModule, LearningAngularRoutingModule, DataBindingModule],
})
export class LearningAngularModule {}
