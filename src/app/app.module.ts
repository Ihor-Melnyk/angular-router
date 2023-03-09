import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module'; // CLI imports AppRoutingModule
import { AppComponent } from './app.component';
import { ContactsModule } from './contacts/contacts.module';
import { LearningAngularModule } from './learning-angular/learning-angular.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LearningAngularModule,
    ContactsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { RouterModule } from '@angular/router';

// import { AppComponent } from './app.component';
// import { HomeComponent } from './home/home.component';
// import { HeroesListComponent } from './heroes-list/heroes-list.component';
// import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
// import { ContactsComponent } from './contacts/contacts.component';
// import { HomeWorkComponent } from './home-work/home-work.component';
// import { Task1Component } from './home-work/data-binding/task1/task1.component';
// import { Task2Component } from './home-work/data-binding/task2/task2.component';
// import { DataBindingComponent } from './home-work/data-binding/data-binding.component';
// import { DirectivePipeComponent } from './home-work/directive-pipe/directive-pipe.component';
// import { UlOlComponent } from './home-work/directive-pipe/ul-ol/ul-ol.component';
// import { InputRadioComponent } from './home-work/directive-pipe/input-radio/input-radio.component';
// import { PipesComponent } from './home-work/directive-pipe/pipes/pipes.component';
// import { ModulesAndComponentsComponent } from './home-work/modules-and-components/modules-and-components.component';
// import {
//   ChildrenComponent,
//   MenComponent,
//   WomenComponent,
// } from './home-work/modules-and-components/clothes/index';

// @NgModule({
//   declarations: [
//     AppComponent,
//     HomeComponent,
//     HeroesListComponent,
//     PageNotFoundComponent,
//     ContactsComponent,
//     HomeWorkComponent,
//     Task1Component,
//     Task2Component,
//     DataBindingComponent,
//     DirectivePipeComponent,
//     UlOlComponent,
//     InputRadioComponent,
//     PipesComponent,
//     ModulesAndComponentsComponent,
//     ChildrenComponent,
//     MenComponent,
//     WomenComponent,
//   ],
//   imports: [
//     BrowserModule,
//     RouterModule.forRoot([
//       { path: 'contacts', component: ContactsComponent },
//       { path: 'home', component: HomeComponent },
//       {
//         path: 'home-work',
//         component: HomeWorkComponent,
//         children: [
//           {
//             path: '3-data-binding',
//             component: DataBindingComponent,
//             children: [
//               { path: 'task1', component: Task1Component },
//               { path: 'task2', component: Task2Component },
//             ],
//           },
//           {
//             path: '4-directive-pipe',
//             component: DirectivePipeComponent,
//             children: [
//               { path: 'ul-ol', component: UlOlComponent },
//               { path: 'input-radio', component: InputRadioComponent },
//               { path: 'pipes', component: PipesComponent },
//             ],
//           },

//           {
//             path: '5-modules-and-components',
//             component: ModulesAndComponentsComponent,
//             children: [
//               { path: 'clothes-children', component: ChildrenComponent },
//               { path: 'clothes-men', component: MenComponent },
//               { path: 'clothes-women', component: WomenComponent },
//             ],
//           },
//         ],
//       },

//       { path: 'heroes-list', component: HeroesListComponent },
//       { path: '', redirectTo: '/home', pathMatch: 'full' },
//       { path: '**', component: PageNotFoundComponent },
//     ]),
//   ],
//   providers: [],
//   bootstrap: [AppComponent],
// })
// export class AppModule {}
