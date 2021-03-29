import {projectFactory, taskFactory} from './object-factory'

const projectDomManager = () => {
    const addNewProjectButton = document.getElementById('add-new-project');

    addNewProjectButton.addEventListener('click', function() {
        const sidebar = document.getElementById('sidebar');
        const projects = document.getElementsByClassName('sidebar-element');

        Array.from(projects).forEach(elem => elem.classList.remove('active'));

        //get text input

        const newProject = document.createElement('div');
        newProject.classList.add('sidebar-element', 'active');

        const newProjectText = document.createElement('input');
        newProjectText.type = 'text';
        newProjectText.maxLength = 12;
        newProject.appendChild(newProjectText);

        const confirmButton = document.createElement('i');
        confirmButton.classList.add('bi-check', 'confirm-button');
        newProject.appendChild(confirmButton);
        
        sidebar.appendChild(newProject);
    }, false);
}


const taskDomManger = () => {
    const addNewTaskButton = document.getElementById('add-new-task');

    addNewTaskButton.addEventListener('click', function() {
        const main = document.getElementById('main');

        const newTask = document.createElement('div');
        newTask.innerHTML = 'New Task';
        newTask.classList.add('task');
        main.appendChild(newTask);
    });

}

export {projectDomManager, taskDomManger}