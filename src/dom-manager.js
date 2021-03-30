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
    const addNewTaskButton = document.getElementById('add-new-task');

    addNewTaskButton.addEventListener('click', function() {
        const main = document.getElementById('main');
        const newTask = document.createElement('div');
        newTask.innerHTML = 'New Task';
        newTask.classList.add('task');
        main.appendChild(newTask);
    });
})()

export {
    projectDomManager, 
    taskDomManger
}