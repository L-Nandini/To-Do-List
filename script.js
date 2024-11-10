document.getElementById('add-btn').addEventListener('click', function() {
    const taskInput = document.getElementById('task-input');
    const datetimeInput = document.getElementById('datetime-input');
    const taskList = document.getElementById('task-list');

    if (taskInput.value && datetimeInput.value) {
        const listItem = document.createElement('li');
        listItem.className = 'task-item';

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'task-checkbox';
        
        const taskText = document.createElement('label');
        taskText.textContent = taskInput.value;

        const taskTime = document.createElement('span');
        taskTime.className = 'task-time';
        taskTime.textContent = new Date(datetimeInput.value).toLocaleString(); // Format the date and time

        // Create delete button
        const deleteButton = document.createElement('button');
        deleteButton.className = 'delete-btn';
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function() {
            taskList.removeChild(listItem); // Remove the task item
        });

        listItem.appendChild(checkbox);
        listItem.appendChild(taskText);
        listItem.appendChild(taskTime);
        listItem.appendChild(deleteButton); // Append delete button to the list item
        taskList.appendChild(listItem);

        taskInput.value = '';
        datetimeInput.value = '';
    } else {
        alert("Please enter both task and date/time.");
    }
});

// Mark tasks as completed
document.getElementById('task-list').addEventListener('change', function(event) {
    if (event.target.classList.contains('task-checkbox')) {
        const taskItem = event.target.parentElement;
        taskItem.classList.toggle('completed');
    }
});
