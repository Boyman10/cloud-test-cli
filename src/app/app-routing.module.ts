import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {JournalComponent} from "./journal/journal.component";
import {HomeComponent} from "./view/home/home.component";
import {AddEntryComponent} from "./journal/add-entry/add-entry.component";
import {AuthGuard} from "./services/auth-guard.service";

const routes: Routes = [
  {
    path: 'journal',
    component: JournalComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'add-entry',
    component: AddEntryComponent,
    canActivate: [AuthGuard]
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
