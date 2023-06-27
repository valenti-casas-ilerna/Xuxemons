import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {IntroScreenComponent} from "./intro-screen/intro-screen.component";
import {MainScreenComponent} from "./main-screen/main-screen.component";

const routes: Routes = [
  {path: '', redirectTo: 'intro', pathMatch: 'full'},
  {path: 'intro', component: IntroScreenComponent},
  {path: 'main', component: MainScreenComponent},
  {path: '**', redirectTo: 'intro', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
