import {FrameworkConfiguration} from 'aurelia-framework';
import {Router, RouterConfiguration} from 'aurelia-router';

export function configure(config: FrameworkConfiguration) {
  let router = config.aurelia.container.get(Router);
  getRoutes().forEach((route: any) => {
      router.addRoute(route);
  });
  router.refreshNavigation();
  //config.globalResources([]);
}

function getRoutes(): Array<any>{
    return [{ 
        route     : '', 
        name      :'todo', 
        moduleId  : './todo/todo',   
        title     : 'Todo List'
    }];
}