window.onload = function() {
    let userName = localStorage.getItem("userName");
    if (!userName) {
        userName = prompt("Enter your name:");
        localStorage.setItem("userName", userName);
    }
    document.getElementById("greeting").textContent = `Hello, ${userName}!`;
};

function addTask() {
    const input = document.getElementById("todo-input");
    const taskText = input.value.trim();

    if (taskText) {
        const li = document.createElement("li");
        li.textContent = taskText;

        const completeBtn = document.createElement("button");
        completeBtn.textContent = "Mark as Completed";
        completeBtn.onclick = () => li.classList.toggle("completed");

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.onclick = () => li.remove();

        li.appendChild(completeBtn);
        li.appendChild(deleteBtn);
        document.getElementById("todo-list").appendChild(li);

        input.value = "";
    }
}
