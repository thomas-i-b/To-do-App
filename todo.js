let todoList= [];
displayItems();

function addTodo(){
  let inputElement= document.querySelector('#todo-input');
  let dateElement= document.querySelector('#todo-date');

  let todoItem= inputElement.value;
  let todoDate= dateElement.value;
  todoList.push({item:todoItem, dueDate: todoDate});

  
  inputElement.value=''; //to display the default comment in input box
  dateElement.value = ''; //to display the default calender
  displayItems();
}



function displayItems(){
  let containerElement= document.querySelector('.todo-container');

  let newHtml=''; //clears the previous entry i.e. entry made when displayItems() is called.
  for(let i=0; i<todoList.length; i++){
    // let item=todoList[i].item;
    // let dueDate=todoList[i].dueDate;
    let {item, dueDate} = todoList[i];

    newHtml+=`
   
      <span>${item}</span> 
      <span>${dueDate}</span> 
      <button class="btn-delete" onclick="
        todoList.splice(${i},1);
        displayItems();
      "> Delete </button>
     
    `; //div id block element and span in inline element//
  } 
  containerElement.innerHTML = newHtml;
}