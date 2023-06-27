import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {IntroScreenComponent} from "./intro-screen/intro-screen.component";
import {MainScreenComponent} from "./main-screen/main-screen.component";
import {CollectionScreenComponent} from "./main-screen/collection-screen/collection-screen.component";
import {MenuScreenComponent} from "./main-screen/menu-screen/menu-screen.component";

const routes: Routes = [
  {path: '', redirectTo: 'intro', pathMatch: 'full'},
  {path: 'intro', component: IntroScreenComponent},
  {
    path: 'main', component: MainScreenComponent,
    children: [
      {path: '', redirectTo: 'menu', pathMatch: 'full'},
      {path: 'menu', component: MenuScreenComponent},
      {path: 'collection', component: CollectionScreenComponent},
    ]
  },
  {path: '**', redirectTo: 'intro', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
