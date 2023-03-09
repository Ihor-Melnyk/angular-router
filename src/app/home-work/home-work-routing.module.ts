import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { HomeWorkComponent } from './home-work.component';

const routes: Routes = [
  {
    path: 'home-work',
    component: HomeWorkComponent,
    children: [
      {
        path: '3-data-binding',
        component: DataBindingComponent,
      },
    ],
    //
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeWorkRoutingModule {}
