import {customElement, bindable, bindingMode} from 'aurelia-framework';
import {Todo} from './todo';
@customElement('todo-list')
@bindable({name: 'todoList', attribute: 'todos', defaultBindingMode: bindingMode.twoWay})
export class TodoList {
    todoList: Todo[];

    removeTodo(todo: Todo): void {
		let index = this.todoList.indexOf(todo);
		if(index !== -1){
			this.todoList.splice(index, 1);
		}
	}
}