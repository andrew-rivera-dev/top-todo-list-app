import {projectFactory, taskFactory} from './object-factory'

const projectDomManager = () => {
    const addNewProjectButton = document.getElementById('add-new-project');

    addNewProjectButton.addEventListener('click', function() {
        const sidebar = document.getElementById('sidebar');
        const projects = document.getElementsByClassName('sidebar-element');

        Array.from(projects).forEach(elem => elem.classList.remove('active'));

        const newProject = document.createElement('div');
        newProject.innerHTML = 'test';
        newProject.classList.add('sidebar-element', 'active');

        sidebar.appendChild(newProject);
    });
}


const taskDomManger = () => {
    const addNewProjectButton = document.getElementById('add-new-project');

    addNewProjectButton.addEventListener('click', function() {
        
    });

}

export {projectDomManager, taskDomManger}