import {customElement, bindable, bindingMode, inject} from 'aurelia-framework';
import {Todo} from './todo';

@customElement('todo-item')
@bindable({name: 'todo', attribute: 'todo', defaultBindingMode: bindingMode.twoWay})
@bindable({name: 'todoList', attribute: 'todos', defaultBindingMode: bindingMode.twoWay})
@inject(Element)

export class TodoItem {
    todo        : Todo;
    todoList    : Todo[];
    element     : Element;

    constructor(element){
        this.element = element;
    }

    emitRemove(): void{
        this.element.dispatchEvent(new CustomEvent('remove'));
    }
}