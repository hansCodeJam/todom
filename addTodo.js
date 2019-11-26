const printValue = function(value) {
    const listItem = document.createElement('li');
    listItem.innerText = value;
    const list = document.querySelector('.todo-list')
    list.appendChild(listItem);
  }

document.querySelector('.add-todo').addEventListener('click', function() {
    const userInput = document.querySelector('.todo-input').value;
    printValue(userInput);
});

