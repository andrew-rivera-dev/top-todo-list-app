import {Project, Tracker} from './logic';

function projectManager() {

let projectDictionary = new Tracker();

//Create new projects

//Create new project element on button click
const addProjectForm = document.getElementById('add-project-form');
addProjectForm.addEventListener('submit', () => {
    //Validate input
    const addProjectInput = document.getElementById('add-project-input');
    if (addProjectInput.value === '') return;

    //Store input
    const newProjectName = addProjectInput.value;

    //Reset input
    addProjectInput.value = '';

    //Create new project object
    const newProjectObject = new Project(newProjectName);
    projectDictionary.add(newProjectObject.id, newProjectObject);

    //Create new project element
    const newProjectElement = createProjectElement(newProjectObject);

    //Add to project list
    document.getElementById('sidebar');
    sidebar.appendChild(newProjectElement);
});

const allProjectsFolder = document.getElementById('all-projects-default');
allProjectsFolder.addEventListener('click', () => {
    clearActiveProject();
    allProjectsFolder.classList.add('active');
    //renderAllTasks
})

//--------------------Helper Functions--------------------//

function createProjectElement(newProjectObject) {
    clearActiveProject();
    const newProjectElement = document.createElement('div');
    newProjectElement.classList.add('sidebar-element', 
                                    'project-folder', 
                                    'active');
    newProjectElement.id = newProjectObject.id;
    newProjectElement.innerHTML = newProjectObject.name;

    newProjectElement.addEventListener('click', () => {
        clearActiveProject();
        newProjectElement.classList.add('active');
        //renderProjectTasks()
    });

    const deleteButton = document.createElement('button');
    deleteButton.type = 'button';
    deleteButton.title = 'Delete project';
    deleteButton.id = `deleteButton_${newProjectObject.id
                                        .split('_')[1]}`;
    deleteButton.classList.add('project-delete-button');

    const deleteIcon = document.createElement('i');
    deleteIcon.id = `deleteIcon_${newProjectObject.id
                                        .split('_')[1]}`;
    deleteIcon.classList.add('bi-x-circle-fill', 'project-delete-icon');
    deleteButton.appendChild(deleteIcon);
    
    deleteButton.addEventListener('click', deleteProject, false);

    newProjectElement.appendChild(deleteButton);

    return newProjectElement;
}

function renderProjectTasks() {
    const clickedProject = this;
}

function clearActiveProject() {
    const projects = document.getElementsByClassName('project-folder');
    Array.from(projects).forEach(project => {
        project.classList.remove('active');
        // hideProjectButtons(project);
    });
}

function deleteProject() {
    const clickedDeleteButton = this;
    const projectToDelete = document.getElementById(`project_${clickedDeleteButton.id
                                                                .split('_')[1]}`);
    projectDictionary.remove(projectToDelete.id);
    const sidebar = document.getElementById('sidebar');
    sidebar.removeChild(projectToDelete);
}

/*
Maintain existing projects

--Render all tasks when All Projects folder is clicked
--Render all tasks for a project when clicked
--On project delete, reassign it's tasks to default
*/

}

export {projectManager}