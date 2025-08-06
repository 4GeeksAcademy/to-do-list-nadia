const input = document.querySelector(".input");
const addButton = document.querySelector(".addButton");
const taskList = document.querySelector(".taskList");
const deleteButton = document.querySelector(".deleteButton");
const editButton = document.querySelector(".editButton");

function addNewTask() {
  const task = input.value;
  const newTask = document.createElement("li");
  newTask.classList.add(
    "list-group-item",
    "d-flex",
    "justify-content-between",
    "mb-2"
  );
  const listHTML = `<span>${task}</span>
  <div>
    <button class="btn editButton btn-sm btn-outline-primary me-2 fs-6 fw-bold">Edit</button>
    <button class="btn deleteButton btn-sm btn-outline-danger fs-6 fw-bold">Delete</button>
  </div>`;

  newTask.innerHTML = listHTML;
  taskList.appendChild(newTask);

  input.value = "";
}
taskList.addEventListener("click", (e) => {
  const li = e.target.closest("li");
  if (e.target.classList.contains("deleteButton")) {
    li.remove();
  }
  if (e.target.classList.contains("editButton")) {
    li.remove();
  }
  if (li && taskList.contains(li)) {
    li.classList.toggle("completed");
  }
});

addButton.addEventListener("click", addNewTask);
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") addNewTask();
});
