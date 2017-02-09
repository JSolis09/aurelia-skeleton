import {customElement, bindable, bindingMode} from 'aurelia-framework';
import {Todo} from './todo';

@customElement('todo-input')
@bindable({name: 'todoList', attribute: 'todos', defaultBindingMode: bindingMode.twoWay})
export class TodoInput {
	todoList    	: Todo[];
    todoDescription : string;
    addTodo(): void {
		if(this.todoDescription){
			this.todoList.push({
				description: this.todoDescription
			});
			this.todoDescription = '';
		}
	}

}