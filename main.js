let taskContainer = document.querySelector('.todo-container');
let taskinput = document.querySelector('input');
let addBtn = document.querySelector('.plus');
let taskStats = document.querySelector('.task-stats');
let taskCount = document.querySelector('.tasks-count span');
let completedTasks = document.querySelector('.tasks-completed span');
let taskContent = document.querySelector('.tasks-content');


window.onload = function() {

    taskinput.focus();

}

addBtn.onclick = function() {

    if(taskinput.value === '') {

        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please enter the Task!',
            footer: '<a href="">Why do I have this issue?</a>'
          })
          
          taskinput.focus();

    } else {

        let tasksMsg = document.querySelector('.no-tasks-message');

        if(document.body.contains(tasksMsg)) {

            tasksMsg.remove();

        }


        let task = document.createElement('span');

        task.className = 'task-box'

        let taskDelete = document.createElement('span');

        taskDelete.className = 'delete';

        let taskText = document.createTextNode(taskinput.value);

        let taskDeleteText = document.createTextNode('Delete');

        task.appendChild(taskText)

        taskDelete.appendChild(taskDeleteText)

        task.appendChild(taskDelete)

        taskContent.appendChild(task)

        taskinput.value = '';

        taskinput.focus();

        task.onclick = function() {

            task.classList.toggle('finished')
    
            taskinput.focus();

            calculation()
        
        }

        taskDelete.onclick = function() {
            task.remove();
            taskinput.focus();
            taskCount.innerHTML--;

            if(taskContent.childElementCount == 0) {

                creatNoTasksElement(); 
            }
        }

        taskCount.innerHTML++;
        

    }
}

function creatNoTasksElement() {

    let mainSpan = document.createElement('span');

    mainSpan.className = ('no-tasks-message')

    let mainSpanMsg = document.createTextNode('No Tasks To Show')

    mainSpan.appendChild(mainSpanMsg)

    taskContent.appendChild(mainSpan)

}



function calculation() {

    completedTasks.innerHTML = document.querySelectorAll('.tasks-content .finished').length;

}