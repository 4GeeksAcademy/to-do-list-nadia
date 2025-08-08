const input = document.querySelector(".input");
const addButton = document.querySelector(".addButton");
const taskList = document.querySelector(".taskList");
const deleteButton = document.querySelector(".deleteButton");
const editButton = document.querySelector(".editButton");

function addNewTask() {
  const task = input.value.trim();
  if (task === "") return;

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
    return;
  }

  const editBtn = e.target.closest(".editButton");
  if (editBtn) {
    const span = li.querySelector("span");
    const isEditing = span.querySelector("input");

    if (!isEditing) {
      const currentText = span.textContent;
      span.innerHTML = `<input type="text" class="form-control form-control-sm" value="${currentText}">`;
      editBtn.textContent = "Save";
    } else {
      const inputField = span.querySelector("input");
      span.textContent = inputField.value.trim() || "Task without name!";
      editBtn.textContent = "Edit";
    }
    return;
  }

  if (!e.target.closest("button") && !e.target.closest("input")) {
    li.classList.toggle("completed");
  }
});

addButton.addEventListener("click", addNewTask);
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") addNewTask();
});
