console.log("running fine");
let todoList = [
  {
    items: 'Buy milk ',
    dueDate: '4/14/2020',
  },
  {
    items: 'Go to Collage',
    dueDate: '1/14/2020',
  },
];
displayItems();

function addTodo(){
  let inputElement = document.querySelector('#main-input');
  let dateElement = document.querySelector('#todo-date');

  let inputItem = inputElement.value;
  let dateItem = dateElement.value;

  console.log(dateItem);
  console.log(inputItem);

  todoList.push({items: inputItem ,dueDate: dateItem});
  
  inputElement.value = '';
  dateElement.value = '';
  displayItems();
}

function displayItems(){
  let containerElement = document.querySelector('.containerElement');
   
  let newHtml = '';

  for(let i=0; i<todoList.length; i++){
    
    let {items,dueDate} = todoList[i];

   newHtml+=
    `
      <span>${items}</span> 
      <span>${dueDate}</span> 
      <button class = "btn-delete" onclick = "todoList.splice(${i} , 1);
      displayItems();" > Delete </button> 
     `;
   }
   containerElement.innerHTML =newHtml;
  }
 