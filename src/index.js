document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector("form")
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    buildToDo(e.target.querySelector("#new-task-description").value)
    form.reset()
})
})

function buildToDo(todo){
  let p = document.createElement('p')
  let btn = document.createElement('button')
  let priorityOptions = document.getElementById("options")
  let date = document.getElementById("date")

  btn.addEventListener('click', deleteToDo)
  btn.textContent = "x"
  p.textContent = `${todo} `
  p.appendChild(btn)
  document.querySelector("#tasks").appendChild(p)

  let priority = priorityOptions.options[priorityOptions.selectedIndex].value
  console.log(priority)

  switch (priority){
    case 'high':
      p.style.color = "red";
      break;
    case 'medium':
      p.style.color = "orange";
      break;
    case 'low':
      p.style.color = 'seagreen';
  }


}

function deleteToDo(e){
  e.target.parentNode.remove()
}