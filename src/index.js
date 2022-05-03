document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector('form');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    createToDo(e.target["new-task-description"].value);
    form.reset();
  })
});

function createToDo(todo) {
  const btn = document.createElement('button')
  document.getElementById("list");
  list.innerHTML += `<li>${todo} <button>${btn}</button></li>`;
  document.querySelector('button').textContent = ' x'
  document.querySelector('button').addEventListener('click', handleDelete);
}

function handleDelete(e) {
  e.target.parentNode.remove();
}

