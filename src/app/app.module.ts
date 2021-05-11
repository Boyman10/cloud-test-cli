import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { JournalComponent } from './journal/journal.component';
import { HomeComponent } from './view/home/home.component';
import { AddEntryComponent } from './journal/add-entry/add-entry.component';

@NgModule({
  declarations: [
    AppComponent,
    JournalComponent,
    HomeComponent,
    AddEntryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
