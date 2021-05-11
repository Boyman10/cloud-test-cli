import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {JournalComponent} from "./journal/journal.component";
import {HomeComponent} from "./view/home/home.component";
import {AddEntryComponent} from "./journal/add-entry/add-entry.component";

const routes: Routes = [
  {
    path: 'journal',
    component: JournalComponent
  },
  {
    path: 'add-entry',
    component: AddEntryComponent
  },
  {
    path: '',
    component: HomeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
