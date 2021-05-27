import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {JournalComponent} from "./journal/journal.component";
import {HomeComponent} from "./view/home/home.component";
import {AddEntryComponent} from "./journal/add-entry/add-entry.component";
import {CustomAuthGuard} from "./services/custom-auth-guard.service";
import {AuthGuard} from "./guard/auth.guard";

const routes: Routes = [
  {
    path: 'journal',
    component: JournalComponent,
    canActivate: [CustomAuthGuard]
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
