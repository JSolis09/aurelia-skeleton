import {Router, RouterConfiguration} from 'aurelia-router';

export class App {
  router: Router;

  configureRouter(config: RouterConfiguration, router: Router){
    config.title = 'TODOS';
    config.map([
      { 
        route     : '', 
        name      :'todo', 
        moduleId  : './app/todo/todo',   
        title     : 'Todo List'
      }
    ]);

    this.router = router;
  }
}