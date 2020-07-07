import View from '../view.js';
import SortHelper from '../helper/sort.js';


let tasks = [];
let tasksSorted = [];
let count;


 const render = function(){

    //console.log(tasks);
    const tasksContainer = document.querySelector("#tasks");
    const sortContainer = document.querySelector("#sorting");
    const paginaionContainer = document.querySelector("#pagination");
    //console.log(count)
    sortContainer.innerHTML = View.render('sort');
    paginaionContainer.innerHTML = View.render('pagination', {pageCount:count});
 
    if(tasksSorted.length == 0){

        tasksContainer.innerHTML = View.render('tasks', {tasks:tasks});

    } else if(tasksSorted.length > 0){

        tasksContainer.innerHTML = View.render('tasks', {tasks:tasksSorted});
    }
    sortedRender();
  
}

function sortedRender(){
      

    const sortSelectEl = document.querySelector('[data-role=sort]');
    const sortTypeEl = document.querySelector('[data-role=sortType]');
    const queryInputEl = document.querySelector('[data-role=queryInput');
    const acceptBtnEl = document.querySelector('[data-role=acceptBtn');

    queryInputEl.value = localStorage.getItem("sortVal");
    sortSelectEl.value = localStorage.getItem("sortNameVal") == undefined ? 'name' : localStorage.getItem("sortNameVal");
    sortTypeEl.value  = localStorage.getItem("sortTypeVal")  == undefined ? 'equal' : localStorage.getItem("sortTypeVal");

    let sortNameVal = localStorage.getItem("sortNameVal");
    let sortTypeVal = localStorage.getItem("sortTypeVal");
    let sortVal = localStorage.getItem("sortVal");

    

    sortSelectEl.addEventListener("change", function(e){
        sortNameVal = e.target.value;
    });
    sortTypeEl.addEventListener("change", function(e){
        sortTypeVal = e.target.value;
    }); 

    
    acceptBtnEl.addEventListener('click', e=>{

        localStorage.setItem("sortVal", queryInputEl.value);
        localStorage.setItem("sortNameVal", sortSelectEl.value);
        localStorage.setItem("sortTypeVal", sortTypeEl.value);
        
        sortVal =  localStorage.getItem("sortVal");

        

        SortHelper.sort(tasks, sortNameVal, sortTypeVal, sortVal);
        console.log("sort "  + sortNameVal);
        console.log("sort type "  + sortTypeVal);
        console.log("sortVal " + sortVal);

        if(tasksSorted.length == 0){

            alert("Ничего не найдено");
        }
      
       render();

    });
}


export default{

    setData(data){
        tasks = data["tasks"];
        count = data["count"] / 3;
    },
    setSortedData(data){
        tasksSorted = data;
        //count = data.length / 3;
    },
    render
    


}