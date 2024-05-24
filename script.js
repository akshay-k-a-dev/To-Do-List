function addTask() {
    var input = document.getElementById("taskInput");
    var task = input.value;
    if (task === '') {
        alert("Please enter a task!");
        return;
    }

    var ul = document.getElementById("taskList");
    var li = document.createElement("li");

    var taskText = document.createTextNode(task);
    li.appendChild(taskText);

    var removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.className = "remove-btn";
    removeBtn.onclick = function() {
        ul.removeChild(li);
        showAlert("Task removed!");
    };

    li.appendChild(removeBtn);
    ul.appendChild(li);

    input.value = "";

    showAlert("Task added!");
}

function showAlert(message) {
    var alertBox = document.getElementById("alert");
    alertBox.textContent = message;
    alertBox.style.display = "block";
    setTimeout(function() {
        alertBox.style.display = "none";
    }, 2000);
}

document.addEventListener("DOMContentLoaded", function() {
    var buttons = document.querySelectorAll("button");
    buttons.forEach(function(button) {
        button.addEventListener("click", function() {
            button.style.transform = "scale(0.95)";
            setTimeout(function() {
                button.style.transform = "scale(1)";
            }, 200);
        });
    });
});
