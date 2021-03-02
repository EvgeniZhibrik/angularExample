import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from "./pages/main/main.component";
import {AddUserComponent} from "./pages/add-user/add-user.component";

const routes: Routes = [{
  path: 'main',
  pathMatch: 'full',
  component: MainComponent
},
  {
    path: 'add',
    pathMatch: 'full',
    component: AddUserComponent
  },
  {
  path: '**',
  redirectTo: 'main'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
