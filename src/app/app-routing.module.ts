import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DirectoryComponent } from "./directory/directory.component";
import { HomeComponent } from "./home/home.component";
import { NavComponent } from "./nav/nav.component";


const routes: Routes = [
  {
    //路由参数
    // path: "directory/:person", component: DirectoryComponent
    path: "directory", component: DirectoryComponent
  },
  {
    path: "", component: HomeComponent
  },
  {
    path: "nav", component: NavComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
