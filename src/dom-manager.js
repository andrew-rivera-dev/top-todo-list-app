import {Project, Task, projectTracker, taskTracker} from './logic';

function projectDomManager() {
    function pushNewProjectToSidebar() {
        const sidebar = document.getElementById('sidebar');
        clearActiveProjects();
        const newProject = createNewProjectDiv();
        sidebar.appendChild(newProject);
        newProject.firstElementChild.focus();
    }
    
    const addNewProjectButton = document.getElementById('add-new-project');
    addNewProjectButton.addEventListener('click', pushNewProjectToSidebar, false);

    const allProjectsFolder = document.getElementById('all-projects');
    allProjectsFolder.addEventListener('click', function() {
        clearActiveProjects();
        allProjectsFolder.classList.add('active');
    }, false);
}



function createNewProjectDiv() { 
    const newProject = document.createElement('form');
    newProject.classList.add('sidebar-element', 'created-sidebar-element', 'active');

    const newProjectText = document.createElement('input');
    newProjectText.type = 'text';
    newProjectText.maxLength = 12;
    newProject.appendChild(newProjectText);

    const confirmButton = document.createElement('button');
    confirmButton.type = 'submit';
    confirmButton.classList.add('confirm-button');

    const checkIcon = document.createElement('i');
    checkIcon.classList.add('bi-check');
    confirmButton.appendChild(checkIcon);

    function deleteSelf() {
        this.parentNode.removeChild(this);
    }

    // newProject.addEventListener('focusout', deleteSelf, false)
    // newProjectText.addEventListener('focusout', deleteSelf, false);

    newProject.addEventListener('submit', function(event) {
        // newProject.removeEventListener('focusout', deleteSelf, false);
        // newProjectText.removeEventListener('focusout', deleteSelf, false);
        
        const text = newProjectText.value;
        if (text === '') return;

        projectTracker.add(new Project(text));
        newProject.innerHTML = text;
        event.preventDefault();
    }, false);

    newProject.appendChild(confirmButton);

    newProject.addEventListener('click', function() {
        clearActiveProjects();
        newProject.classList.add('active');
    }, false);

    return newProject;
}

function clearActiveProjects() {
    const projects = document.getElementsByClassName('sidebar-element');
    Array.from(projects).forEach(elem => elem.classList.remove('active'));
}



function taskDomManger() {
    const addTaskButton = document.getElementById('add-new-task');

    addTaskButton.addEventListener('click', function() {
        const addTaskForm = document.getElementById('task-form');
        addTaskForm.style.display = 'block';

        document.getElementById('form-title').value = '';
        document.getElementById('form-description').value = '';
        document.getElementById('form-due-date').value = '';
        document.getElementById('form-notes').value = '';

        const children = document.body.children;

        for (let i = 0; i < children.length; i++) {
            if (children[i].id !== 'task-form') children[i].classList.add('blur-filter');
        }

    });

    function closeForm() {
        document.getElementById('task-form').style.display = 'none';

        const children = document.body.children;

        for (let i = 0; i < children.length; i++) {
            if (children[i].classList.contains('blur-filter')) children[i].classList.remove('blur-filter');
        }
    }

    const submitFormButton = document.getElementById('btn-create');
    submitFormButton.addEventListener('click', () => {
        const rawInputs = document.getElementsByClassName('form-info');
        const inputs = Array.from(rawInputs).map(x => x.value);
        const currentProject = document.getElementsByClassName('sidebar-element active');
        const newTask = new Task(inputs[0], inputs[1], inputs[2], inputs[3], inputs[4], currentProject.innerHTML);
        const newTaskDiv = createNewTaskDiv(newTask);

        projectTracker.add(newTask);

        const main = document.getElementById('main');
        main.appendChild(newTaskDiv);
        closeForm();
    })

    const closeFormButton = document.getElementById('btn-cancel');
    closeFormButton.addEventListener('click',closeForm);
}

function createNewTaskDiv(task) {
    const newTask = document.createElement('div');
    newTask.classList.add('task');
    
    const title = document.createElement('span');
    title.classList.add('task-title','task-property');
    title.innerHTML = task.title;
    newTask.appendChild(title);

    const description = document.createElement('span');
    description.classList.add('task-description', 'task-property');
    description.innerHTML = task.description;
    newTask.appendChild(description);

    const dueDate = document.createElement('span');
    dueDate.classList.add('task-due-date', 'task-property');
    dueDate.innerHTML = task.dueDate;
    newTask.appendChild(dueDate);
    
    const priority = document.createElement('span');
    priority.classList.add('task-priority', 'task-property');
    priority.innerHTML = task.priority;
    switch(task.priority) {
        case 'High':
            priority.style.color = '#eb8f8f';
            break;
        case 'Medium':
            priority.style.color = '#faedb1';
            break;
        case 'Low':
            priority.style.color = '#a7fcd9';
    }
    newTask.appendChild(priority);

    return newTask;
}



export {
    projectDomManager, 
    taskDomManger,
}