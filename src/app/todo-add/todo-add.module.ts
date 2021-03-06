import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoAddRoutingModule } from './todo-add-routing.module';
import { TodoAddComponent } from './todo-add/todo-add.component';
import { TodoFormModule } from '../shared/todo-form/todo-form.module';


@NgModule({
  declarations: [TodoAddComponent],
  imports: [
    CommonModule,
    TodoAddRoutingModule,
    TodoFormModule
  ]
})
export class TodoAddModule { }
