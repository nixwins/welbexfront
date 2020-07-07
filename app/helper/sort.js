import TaskLayout from '../layout/index.js';

let sn;

function equal(tasks, sortName, val){

    return tasks.filter(function(item, i, arr){ 
       // sortName
        if(item[sortName] == val){
            return 1;
        }

    });
}


function contain(tasks, sortName, val){

     return tasks.filter(function(item, i, arr){ 
        // sortName
         if(item[sortName].includes(val)){
             return 1;
         }

     });
 }
 
function less(tasks, sortName, val){

    return tasks.filter(function(item, i, arr){ 
 
        if(sortName != 'name'){

            if(Number(item[sortName]) < Number(val)){
                return 1;
            }
        }else{

            if(item[sortName] < val){
                return 1;
            }
        }
        
        
     });
 }

 
function more(tasks, sortName, val){

     return tasks.filter(function(item, i, arr){ 
 
        if(sortName != 'name'){

            if(Number(item[sortName]) > Number(val)){
                return 1;
            }
        }else{

            if(item[sortName] > val){
                return 1;
            }
        }
        
        
     });
 }

export default{

    sort(tasks, sortName, type, val){

        switch (type) {
            case "equal":
                tasks = equal(tasks, sortName, val);
               // console.log(tasks)
                break;
        
            case "contain":
                tasks = contain(tasks, sortName, val);
                break;
            case "less":
                tasks = less(tasks, sortName, val);
                break;
            case "more":
                tasks = more(tasks, sortName, val);
                break;

            default:
                break;
        }

        TaskLayout.setSortedData(tasks);
    }
}