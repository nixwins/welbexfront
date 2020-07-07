import TasksLayout from './layout/index.js';
import Tasks from './model.js';

export default{

    async tasksRoute(){
        const data =   await Tasks.getTaskList();
        TasksLayout.setData(data);
        TasksLayout.render();
    },

    async pageRoute({page}){
        const data =   await Tasks.getTaskPage(page);
        TasksLayout.setData(data);
        TasksLayout.render();
    },
    testRoute(){
        console.log("hello i'm test");
    },

    notFoundRoute(){
        console.log("Page not found")
    }


}