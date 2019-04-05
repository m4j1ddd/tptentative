import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InputUserDataFormComponent} from "./input-user-data-form/input-user-data-form.component";

const routes: Routes = [
  {
    path: '',
    component: InputUserDataFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
