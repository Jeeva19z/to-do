
let btn = document.getElementById("btn");
output  = document.getElementById("output");

let inputValue = document.getElementById("inputbox");

let todos = []

window.onload=()=>{
    todos = JSON.parse(localStorage.getItem('todos')) ||[]

    todos.forEach(todosvalu =>addtodos(todosvalu))
}

btn.addEventListener("click",()=>{

    todos.push(inputValue.value)
    
    localStorage.setItem('todos',JSON.stringify(todos))

    addtodos(inputValue.value)
    inputValue.value="" // resert the box


})

function addtodos(todo){


  

    let newElement = document.createElement("p");

    newElement.innerHTML=todo;

    output.appendChild(newElement)
    console.log(todos) 
    //here console to check the ellement add or not 
  
    
    newElement.addEventListener("click",()=>{
        newElement.style.textDecoration="line-through";

        removetodo(todo)
    })
    newElement.addEventListener("dblclick",()=>{
        output.removeChild(newElement)
        // newElement.remove() // this is aonthet one way

        removetodo(todo)
    })


}

function removetodo(todo){

//  console.log("full array befor remove : ",todos)

 let findIndexOf = todos.indexOf(todo); // find the index here

//  console.log("found the index : ", findIndexOf)

 if(findIndexOf>-1){
    todos.splice(findIndexOf,1);
 }
 
//  else{
//     console.log("alredy remove reomve from array")
//  }
localStorage.setItem('todos',JSON.stringify(todos)); // remove the value froma arrya and upate the array again
 console.log("after remove :",todos)

}
