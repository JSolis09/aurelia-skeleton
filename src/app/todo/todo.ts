export interface Todo {
	id?         : number;
	done?		:	boolean;
	description : string;
}

export class TodoComponent {
	heading         : string = "Todo List";
	todoDescription : string;
	todoList        : Todo[] = [];

	constructor(){
		this.todoList.push({
			description:'Default todo'
		});
	}
}