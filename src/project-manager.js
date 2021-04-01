import {Project, Tracker} from './logic';

function projectManager() {

let projectDictionary = new Tracker();

//Create new projects

//--Create new project element on button click
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
    sidebar.appendChild(newProject);
});

function createProjectElement(newProjectObject) {
    clearActiveProject();
    const newProjectElement = document.createElement('div');
    //Incomplete
}

function clearActiveProject() {
    const projects = document.getElementsByClassName('project-folder');
    Array.from(projects).forEach(project => {
        project.classList.remove('active');
        // hideProjectButtons(project);
    });
}

/*
--Validate contents
--Append it to project list
--Focus new element
--Render all tasks for that project (which will be empty)
*/



/*
Maintain existing projects

--Render all tasks when All Projects folder is clicked
--Render all tasks for a project when clicked
--On project delete, reassign it's tasks to default
*/

}

export {projectManager}