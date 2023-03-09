import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LearningAngularComponent } from './learning-angular.component';

const routes: Routes = [
  { path: 'learning-angular', component: LearningAngularComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LearningAngularRoutingModule {}
