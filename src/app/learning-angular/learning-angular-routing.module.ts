import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { RenderImageComponent } from './data-binding/render-image/render-image.component';
import { SliderComponent } from './data-binding/slider/slider.component';
import { DirectivePipeComponent } from './directive-pipe/directive-pipe.component';
import { Directive01NgClassComponent } from './directive-pipe/directive01ng-class/directive01ng-class.component';
import { Directive02ngStyleComponent } from './directive-pipe/directive02ng-style/directive02ng-style.component';
import { Directive03ngIfComponent } from './directive-pipe/directive03ng-if/directive03ng-if.component';
import { Directive04ngSwitchComponent } from './directive-pipe/directive04ng-switch/directive04ng-switch.component';
import { Directive05ngForComponent } from './directive-pipe/directive05ng-for/directive05ng-for.component';
import { Directive06ngTemplateComponent } from './directive-pipe/directive06ng-template/directive06ng-template.component';
import { Directive07ngContainerComponent } from './directive-pipe/directive07ng-container/directive07ng-container.component';
import { Directive08ngTemplateOutletComponent } from './directive-pipe/directive08ng-template-outlet/directive08ng-template-outlet.component';
import { InputRadioComponent } from './directive-pipe/input-radio/input-radio.component';
import { PipesComponent } from './directive-pipe/pipes/pipes.component';
import { UlOlComponent } from './directive-pipe/ul-ol/ul-ol.component';

import { LearningAngularComponent } from './learning-angular.component';
import { ModulesAndComponentsComponent } from './modules-and-components/modules-and-components.component';

const routes: Routes = [
  { path: '', redirectTo: '/learning-angular', pathMatch: 'full' },
  {
    path: 'learning-angular',
    component: LearningAngularComponent,
    children: [
      {
        path: '',
        component: DataBindingComponent,
      },
      {
        path: 'data-binding',
        component: DataBindingComponent,
        children: [
          { path: 'render-image', component: RenderImageComponent },
          { path: 'slider', component: SliderComponent },
        ],
      },
      {
        path: 'directive-pipe',
        component: DirectivePipeComponent,
        children: [
          {
            path: 'ngClass',
            component: Directive01NgClassComponent,
          },
          {
            path: 'ngStyle',
            component: Directive02ngStyleComponent,
          },
          {
            path: 'ngIf',
            component: Directive03ngIfComponent,
          },
          {
            path: 'ngSwith',
            component: Directive04ngSwitchComponent,
          },
          {
            path: 'ngFor',
            component: Directive05ngForComponent,
          },
          {
            path: 'templates-directives',
            component: Directive06ngTemplateComponent,
          },
          {
            path: 'directive-container',
            component: Directive07ngContainerComponent,
          },
          {
            path: 'template-outlet',
            component: Directive08ngTemplateOutletComponent,
          },
          {
            path: 'input-radio',
            component: InputRadioComponent,
          },
          {
            path: 'pipes',
            component: PipesComponent,
          },
        ],
      },
      {
        path: 'modules-and-components',
        component: ModulesAndComponentsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LearningAngularRoutingModule {}
