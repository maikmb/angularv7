import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MusicListComponent } from './_pages/music-list/music-list.component';
import { TodoListComponent } from './_pages/todo-list/todo-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'todo',
    pathMatch: 'full'
  },  
  {
    path: 'todo',
    component: TodoListComponent
  },
  {
    path: 'music',
    component: MusicListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
