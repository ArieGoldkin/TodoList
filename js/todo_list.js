"use strict";

// selected ul section
const TodoList = document.getElementById("Todo_list");
// error message
const messageWindow = document.getElementById("message");
const removeTodo = document.getElementsByClassName("remove");
const deleteTodo = document.getElementsByClassName("delete");

// input todo line
const input = document.getElementById("myTodo");

// popup message box elements
const instBtn = document.getElementById("instructionsBtn");
const instBox = document.getElementById("insBox");

//Color change elements
const changeColor = document.getElementById("colorPicker");
const text = document.getElementById("Todo_list");

const addAtodo = () => {
  const inputValue = input.value;
  let Todo = document.createElement("li");
  let info = document.createTextNode(inputValue);
  let removeBtn = document.createElement("span");
  let closeBtn = document.createElement("span");

  let removeTxt = document.createTextNode("Remove");
  let closeTxt = document.createTextNode("Delete");

  Todo.appendChild(info);
  if (inputValue.trim() === "") {
    messageWindow.innerHTML = "Todo input is empty please enter something!";
  } else {
    TodoList.appendChild(Todo);
    document.getElementById("message").innerHTML = "";
  }
  document.getElementById("myTodo").value = "";

  closeBtn.className = "delete";
  removeBtn.className = "remove";
  removeBtn.appendChild(removeTxt);
  closeBtn.appendChild(closeTxt);
  Todo.appendChild(closeBtn);
  Todo.appendChild(removeBtn);

  // changing the the style with the remove button
  for (let i = 0; i < removeTodo.length; i++) {
    removeTodo[i].onclick = function() {
      let el = this.parentNode;
      el.classList.toggle("done");
    };
  }

  // deleting one Toto
  for (let i = 0; i < deleteTodo.length; i++) {
    deleteTodo[i].onclick = function() {
      let div = this.parentElement;
      div.remove(this);
    };
  }
};

// on key press 'enter' to add a Todo
input.addEventListener("keypress", keypressed);
function keypressed(event) {
  if (event.keyCode === 13) {
    addAtodo();
  }
  return false;
}

//Search a Todo
const searchTodo = () => {
  let searchInput, filter, li, item, txtValue;
  searchInput = document.getElementById("search");
  filter = searchInput.value.toUpperCase();
  li = TodoList.getElementsByTagName("li");

  for (let i = 0; i < li.length; i++) {
    item = li[i];
    txtValue = item.textContent || item.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
};

//Remove all Todos EventListener option

// const deleteListener = document.getElementById("deleteAll");
// deleteListener.addEventListener("click", function() {
//   let list = document.getElementById("Todo_list");
//   list.innerHTML = "";
// });

//Remove all Todos function OnClick option
const removeAllTodo = () => {
  let list = document.getElementById("Todo_list");
  list.innerHTML = "";
};

// Color change event Listener
changeColor.addEventListener("change", function() {
  text.style.color = this.value;
});

//instruction button selection and manipulation
instBtn.addEventListener("mouseover", function() {
  instBox.style.visibility = "visible";
  instBox.style.opacity = "1";
  instBox.style.transition = "0.5s";
});

instBtn.addEventListener("mouseout", function() {
  instBox.style.visibility = "hidden";
  instBox.style.opacity = "0";
  instBox.style.transition = "0.5s";
});

const testMe = document.getElementById("testMe");
testMe.addEventListener("click", function() {
  const curColor = document.body.style.backgroundColor;

  if (curColor === "white") {
    document.body.style.backgroundColor = "#555";
    document.body.style.transition = "0.5s";
  } else {
    document.body.style.backgroundColor = "white";
  }
});
