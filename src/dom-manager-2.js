import {Project, Task, Tracker} from './logic.js';

let projectDictionary = new Tracker();
let allProjects = new Project('All Projects');
allProjects.id = 'all-projects-default';
projectDictionary.add(allProjects.id, allProjects);


//-----------------------Project Manager-----------------------//


function projectManager() {

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
        
        const newProjectText = document.createElement('div');
        newProjectText.classList.add('project-text');
        newProjectText.id = `projectText_${newProjectObject.id
                                            .split('_')[1]}`;
        newProjectText.innerHTML = newProjectObject.name;
    
        newProjectElement.appendChild(newProjectText);
    
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

//-----------------------Task Manager-----------------------//

function taskManager() {
    //Add new task on button click (via form)
    const addTaskButton = document.getElementById('add-task');

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

    const submitFormButton = document.getElementById('btn-create');
    submitFormButton.addEventListener('click', function() {
        const rawInputs = document.getElementsByClassName('form-info');
        const inputs = Array.from(rawInputs).map(x => x.value);
        inputs.pop();
        if (inputs.some(x => x === '')) return;
        
        //Create new task object
        const currentProject = document.getElementsByClassName('sidebar-element active');
        
        //Store data in task object
        const newTaskObject = new Task(inputs[0], inputs[1], inputs[2], inputs[3], currentProject[0].id, inputs[4]);

        //Add task object to project object
        const projectObject = projectDictionary.getItem(currentProject[0].id);
        projectObject.addTask(newTaskObject)
        
        //Create task element
        //const newTaskDiv = createNewTaskDiv(newTask);

        // const main = document.getElementById('main');
        // main.appendChild(newTaskDiv);
        // closeForm();
    })

    const closeFormButton = document.getElementById('btn-cancel');
    closeFormButton.addEventListener('click',closeForm)

    

    //Add to current project list

    //--------------------Helper Functions--------------------//

    function closeForm() {
        document.getElementById('task-form').style.display = 'none';

        const children = document.body.children;

        for (let i = 0; i < children.length; i++) {
            if (children[i].classList.contains('blur-filter')) children[i].classList.remove('blur-filter');
        }
    }
}



export {
    projectManager,
    taskManager,
}