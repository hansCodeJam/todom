const removeValue = function(value){
    const list = document.querySelector('.todo-list')
    list.removeChild(list.childNodes[value])
} 

document.querySelector('.remove-todo').addEventListener('click', function() {
    const indexInput = document.querySelector('.index-input').value;
    removeValue(indexInput);
}); 


