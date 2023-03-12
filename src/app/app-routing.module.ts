import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { HomeComponent } from './home/home.component';
import { HeroesListComponent } from './heroes-list/heroes-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ContactsComponent } from './contacts/index';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },

  { path: 'contacts', component: ContactsComponent },
  { path: 'home', component: HomeComponent },

  { path: 'heroes-list', component: HeroesListComponent },
  // { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
