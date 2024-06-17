function addTask() {
  const task = document.getElementById("taskInput");
  const input = task.value.trim();
  if (input !== "") {
    const ul = document.getElementById("taskList");
    let li = document.createElement("li");
    li.textContent = input;
    ul.appendChild(li);
    task.value = "";
  } else {
    alert("Please enter a task");
  }
}
