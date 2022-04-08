// You do not need to change the constants
const CATEGORY_SELECTOR = "categories-list";
const CATEGORY_FILTER = "categories-list-filter";

let tasks = [];
let categories = [];

categories = ["Movies", "Groceries"];
// SAMPLE
renderCategories(categories, CATEGORY_SELECTOR);
renderCategories(categories, CATEGORY_FILTER);
renderTasks(tasks, "tasks-list");

function taskChecked(taskId, checked) {
  // implement the delete task.
  // You are given the task id
  if(checked === true){
    tasks[taskId].done = true;
    renderTasks(tasks, "tasks-list");
  }

  if(checked === false){
    tasks[taskId].done = false;
    renderTasks(tasks, "tasks-list");
  }
}

function addTask() {
  const selectedCategory = getSelectedCategoryById(CATEGORY_SELECTOR);
  const taskTitle = getNewTaskText();
  // continue the code here
  tasks.push({ id: tasks.length, title: taskTitle, category: selectedCategory, done: false });

  renderTasks(tasks, "tasks-list");
}

function addCategory() {
  const newCategory = getNewCategoryText();
  // continue the code here
  categories.push(newCategory);
  renderCategories(categories, CATEGORY_SELECTOR);
  renderCategories(categories, CATEGORY_FILTER);
}

function filterTasks() {
  const selectedCategory = getSelectedCategoryById(CATEGORY_FILTER);
  const done = getFilteredDone();
  
  const button = document.getElementById("btn");
  button.addEventListener("click", renderTasks(tasks.filter(C => C.category === selectedCategory), "tasks-list"));
  
  const checkBox = document.querySelector("#done");
  if(checkBox.checked === true){
    renderTasks(tasks.filter(D => D.done === done), "tasks-list");
    // if (checkBox.checked === false) {
    //   renderTasks(tasks, "tasks-list");
    // }
  }
  // else if (checkBox.checked === false) {
  //   renderTasks(tasks, "tasks-list");
  // }
  
  // const button = document.getElementById("btn");
  
  
  // const checkBox = document.querySelector("#done");
  // if(checkBox.checked === true && button.clicked === true){
  //   renderTasks(tasks.filter(C => C.category === selectedCategory), "tasks-list");
  //   renderTasks(tasks.filter(D => D.done === done), "tasks-list");
  // }
  // else if(checkBox.checked === true && button.clicked === false){
  //   renderTasks(tasks.filter(D => D.done === done), "tasks-list");
  // }
  // else if(checkBox.checked === false && button.clicked === true){
  //   renderTasks(tasks.filter(C => C.category === selectedCategory), "tasks-list");
  // }
  // else{renderTasks(tasks, "tasks-list");}

  // renderTasks(tasks, "tasks-list");
}