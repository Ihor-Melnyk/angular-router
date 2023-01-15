import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeroesListComponent } from './heroes-list/heroes-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HomeWorkComponent } from './home-work/home-work.component';
import { Task1Component } from './home-work/task1/task1.component';
import { Task2Component } from './home-work/task2/task2.component';
import { DataBindingComponent } from './home-work/data-binding/data-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeroesListComponent,
    PageNotFoundComponent,
    ContactsComponent,
    HomeWorkComponent,
    Task1Component,
    Task2Component,
    DataBindingComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'contacts', component: ContactsComponent },
      { path: 'home', component: HomeComponent },
      {
        path: 'home-work',
        component: HomeWorkComponent,
        children: [
          {
            path: '3-data-binding',
            component: DataBindingComponent,
            children: [
              { path: 'task1', component: Task1Component },
              { path: 'task2', component: Task2Component },
            ],
          },
        ],
      },

      { path: 'heroes-list', component: HeroesListComponent },
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: '**', component: PageNotFoundComponent },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
