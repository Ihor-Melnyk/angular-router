import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LearningAngularRoutingModule } from './learning-angular-routing.module';
import { LearningAngularComponent } from './learning-angular.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DirectivePipeComponent } from './directive-pipe/directive-pipe.component';
import { RenderImageComponent } from './data-binding/render-image/render-image.component';
import { SliderComponent } from './data-binding/slider/slider.component';
import { InputRadioComponent } from './directive-pipe/input-radio/input-radio.component';
import { PipesComponent } from './directive-pipe/pipes/pipes.component';
import { UlOlComponent } from './directive-pipe/ul-ol/ul-ol.component';
import { ModulesAndComponentsComponent } from './modules-and-components/modules-and-components.component';
import { Directive01NgClassComponent } from './directive-pipe/directive01ng-class/directive01ng-class.component';
import { Directive02ngStyleComponent } from './directive-pipe/directive02ng-style/directive02ng-style.component';
import { Directive03ngIfComponent } from './directive-pipe/directive03ng-if/directive03ng-if.component';
import { Directive04ngSwitchComponent } from './directive-pipe/directive04ng-switch/directive04ng-switch.component';
import { Directive05ngForComponent } from './directive-pipe/directive05ng-for/directive05ng-for.component';
import { Directive06ngTemplateComponent } from './directive-pipe/directive06ng-template/directive06ng-template.component';
import { Directive07ngContainerComponent } from './directive-pipe/directive07ng-container/directive07ng-container.component';
import { Directive08ngTemplateOutletComponent } from './directive-pipe/directive08ng-template-outlet/directive08ng-template-outlet.component';

@NgModule({
  declarations: [
    LearningAngularComponent,
    DataBindingComponent,
    DirectivePipeComponent,
    InputRadioComponent,
    PipesComponent,
    UlOlComponent,
    RenderImageComponent,
    SliderComponent,
    ModulesAndComponentsComponent,
    Directive01NgClassComponent,
    Directive02ngStyleComponent,
    Directive03ngIfComponent,
    Directive04ngSwitchComponent,
    Directive05ngForComponent,
    Directive06ngTemplateComponent,
    Directive07ngContainerComponent,
    Directive08ngTemplateOutletComponent,
  ],
  imports: [CommonModule, LearningAngularRoutingModule],
})
export class LearningAngularModule {}
