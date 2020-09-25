import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeScreenComponent } from './screen/home-screen/home-screen.component';
import { PhotoDetailScreenComponent } from './screen/photo-detail-screen/photo-detail-screen.component';

const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full'},
  { path: 'inicio', component: HomeScreenComponent},
  { path: 'photo/:id', component: PhotoDetailScreenComponent},
  { path: '**', redirectTo: '/inicio'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
