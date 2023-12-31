import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { TodoAddComponent } from './todo-add/todo-add.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoFooterComponent } from './todo-footer/todo-footer.component';
import { TodoPageComponent } from './todo-page/todo-page.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { FiltroPipe } from './filtro.pipe';



@NgModule({
  declarations: [
    TodoAddComponent,
    TodoItemComponent,
    TodoFooterComponent,
    TodoPageComponent,
    TodoListComponent,
    FiltroPipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    TodoPageComponent
  ]

})
export class TodoModule { }
