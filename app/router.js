import Controller from './controller.js';

function parseURI(){
    const hash = window.location.hash ? window.location.hash.slice(1) : '';
    let [action, page] =  hash.split('/');
    console.log(page)
    return {action, params: {page} }
}   
function getControllerAction(){
    
}

function router(){

    const root = window.location.pathname;
    const hash = window.location.hash;
    const isRoot = (root == '/' && !hash);
    
    if(isRoot){

        Controller['tasksRoute']();

    }else if(hash){

        const {action, params} = parseURI();
        //const hashRoute = getControllerAction(hash);
        const route = action + 'Route';
        console.log(route)
        try{
            Controller[route](params);
        }catch{
            Controller['notFoundRoute']();
        }
    }
}

export default{

    init(){
        addEventListener('hashchange', router);

        //Принудительно вызваем роутер для того чтобы словить текущий uri
        router();
    }
}