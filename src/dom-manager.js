import {Project, Task, projectTracker, taskTracker} from './logic';

const projectDomManager = (() => {
    const addNewProjectButton = document.getElementById('add-new-project');

    addNewProjectButton.addEventListener('click', function() {
        const sidebar = document.getElementById('sidebar');
        clearActiveProjects();
        const newProject = createNewProjectDiv();
         sidebar.appendChild(newProject);
    }, false);

    const allProjectsFolder = document.getElementById('all-projects');
    allProjectsFolder.addEventListener('click', function() {
        clearActiveProjects();
        allProjectsFolder.classList.add('active');
    }, false);
})()



const createNewProjectDiv = () => {
    //create new project box as form
    const newProject = document.createElement('form');
    newProject.classList.add('sidebar-element', 'created-sidebar-element', 'active');

    //add text input
    const newProjectText = document.createElement('input');
    newProjectText.type = 'text';
    newProjectText.maxLength = 12;
    newProjectText.required = true;
    newProject.appendChild(newProjectText);

    //add confirm button
    const confirmButton = document.createElement('button');
    confirmButton.type = 'submit';
    confirmButton.classList.add('confirm-button');

    //add check icon to button
    const checkIcon = document.createElement('i');
    checkIcon.classList.add('bi-check');
    confirmButton.appendChild(checkIcon);

    newProject.addEventListener('submit', function(event) {
        let text = newProjectText.value;
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

const clearActiveProjects = () => {
    const projects = document.getElementsByClassName('sidebar-element');
    Array.from(projects).forEach(elem => elem.classList.remove('active'));
}



const taskDomManger = (() => {
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

        const main = document.getElementById('main');
        const coding = new Task('Write email to Jim', 'I need to write an email about something important. But more importantly, this is testing my task creator.', '03/10/21', 'Low', '', 'All Projects');
        const newTask = createNewTaskDiv(coding);
        main.appendChild(newTask);
    });

    const closeFormButton = document.getElementById('btn-cancel');
    closeFormButton.addEventListener('click', () => {
        document.getElementById('task-form').style.display = 'none';

        const children = document.body.children;

        for (let i = 0; i < children.length; i++) {
            if (children[i].classList.contains('blur-filter')) children[i].classList.remove('blur-filter');
        }
    });
})()

const createNewTaskDiv = (task) => {
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