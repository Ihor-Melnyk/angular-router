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
    ContactsModule,
    LearningAngularModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
