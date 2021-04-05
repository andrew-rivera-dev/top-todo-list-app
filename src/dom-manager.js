import {Project, Task, Tracker} from './logic';

let projectTracker = new Tracker();
let taskTracker = new Tracker();

function projectDomManager() {
    function pushNewProjectToSidebar() {
        clearActiveProject();

        const sidebar = document.getElementById('sidebar');
        const newProject = createProjectDiv();
        sidebar.appendChild(newProject);

        const textBox = newProject.firstElementChild; 
        textBox.focus();

    }
    
    const addNewProjectButton = document.getElementById('add-project-icon');
    addNewProjectButton.addEventListener('click', pushNewProjectToSidebar, false);

    const allProjectsFolder = document.getElementById('all-projects');
    allProjectsFolder.addEventListener('click', function() {
        clearActiveProject();
        allProjectsFolder.classList.add('active');
        renderAllTasks();
    }, false);
}

function assignProjectEditEventListeners() {
    const allEditButtons = document.getElementsByClassName('project-edit-button');
    Array.from(allEditButtons).forEach(button => {
        button.addEventListener('click', () => {
            const originalProjectDiv = button.parentNode;
            const aboveProjectDiv = originalProjectDiv.previousSibling;
            const sidebar = document.getElementById('sidebar');
            sidebar.removeChild(originalProjectDiv);

            if (aboveProjectDiv.nextSibling === null) {
                sidebar.appendChild(createProjectDiv());
            } else {
                sidebar.insertBefore(createProjectDiv(), 
                                     aboveProjectDiv.nextSibling);
            }
        });
    }, false);
}

function renderAllTasks() {
    const allTasks = document.getElementsByClassName('task');

    for (let i = 0; i < allTasks.length; i++) {
        allTasks[i].style.display = 'flex';
    }
}

function renderProjectTasks() {
    let clickedProject = document.getElementsByClassName('sidebar-element active')[0] ?
                         document.getElementsByClassName('sidebar-element active')[0].innerHTML:
                         '';
    const allTaskDivs = document.getElementsByClassName('task');
    let allTaskObjects = taskTracker.getItems();

    for (let i = 0; i < allTaskDivs.length; i++) {
        const taskDivTitle = allTaskDivs[i].firstChild.innerHTML;
        const matchingTaskObject = allTaskObjects.filter(taskObject => taskObject['title'] === taskDivTitle);
        if (matchingTaskObject[0]['project'] !== clickedProject) {
            allTaskDivs[i].style.display = 'none';
        } else {
            allTaskDivs[i].style.display = 'flex';
        }
    }
}

function createProjectDiv() { 
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

    newProject.appendChild(confirmButton);

    const sidebar = document.getElementById('sidebar');
    function cancelProjectCreate() {
        const textBoxParent = this.parentNode; 
        sidebar.removeChild(textBoxParent);
    }

    newProject.addEventListener('focusout', cancelProjectCreate, false);

    newProject.addEventListener('submit', function(event) {
        newProject.removeEventListener('focusout', cancelProjectCreate, false);
        
        event.preventDefault();
        
        const text = newProjectText.value;
        if (text === '') return;

        projectTracker.add(new Project(text));
        
        newProject.innerHTML = ''; 

        // const editButton = document.createElement('button');
        // editButton.type = 'button';
        // editButton.title = 'Edit project';
        // editButton.classList.add('project-edit-button');

        // const editIcon = document.createElement('i');
        // editIcon.classList.add('bi-pencil-square', 'project-edit-icon');
        // editButton.appendChild(editIcon);

        const projectTextDiv = document.createElement('div');
        projectTextDiv.innerHTML = text;
        projectTextDiv.classList.add('project-text');

        const deleteButton = document.createElement('button');
        deleteButton.type = 'button';
        deleteButton.title = 'Delete project';
        deleteButton.classList.add('project-delete-button');

        const deleteIcon = document.createElement('i');
        deleteIcon.classList.add('bi-x-circle-fill', 'project-delete-icon');
        deleteButton.appendChild(deleteIcon);

        deleteButton.addEventListener('click', () => {
            const projectName = deleteButton.previousSibling.innerHTML;
            const allTaskObjects = taskTracker.getItems();

            for (let i = 0; i < allTaskObjects.length; i++) {
                if (allTaskObjects[i]['project'] === projectName) {
                    allTaskObjects[i]['project'] = 'All Projects';
                }
            }
            
            sidebar.removeChild(deleteButton.parentNode);

        });

        // newProject.appendChild(editButton);
        newProject.appendChild(projectTextDiv);
        newProject.appendChild(deleteButton);

        newProject.addEventListener('click', function() {
            clearActiveProject();
            newProject.classList.add('active');
            renderProjectChildren(newProject);
            renderProjectTasks();
        }, false);

        clearActiveProject();
        newProject.classList.add('active');
        renderProjectTasks();
    }, false);
    
    return newProject;
}

function clearActiveProject() {
    const projects = document.getElementsByClassName('sidebar-element');
    Array.from(projects).forEach(project => {
        project.classList.remove('active');
        hideProjectButtons(project);
    });
}

function renderProjectChildren(project) {
    Array.from(project.children).forEach(child => child.style.visibility = 'visible');
}

function hideProjectButtons(project) {
    let projectChildren = project.children;
    Array.from(projectChildren).forEach(function(child) {
        if (child.tagName === 'BUTTON') child.style.visibility = 'hidden';
    });
}

function taskDomManger() {
    const addTaskButton = document.getElementById('add-task');

    addTaskButton.addEventListener('click', function() {
        const addTaskForm = document.getElementById('create-task-form');
        addTaskForm.style.display = 'block';

        document.getElementById('form-title').value = '';
        document.getElementById('form-description').value = '';
        document.getElementById('form-due-date').value = '';
        document.getElementById('form-notes').value = '';

        const children = document.body.children;

        for (let i = 0; i < children.length; i++) {
            if (children[i].id !== 'create-task-form') children[i].classList.add('blur-filter');
        }

    });

    function closeForm() {
        document.getElementById('create-task-form').style.display = 'none';

        const children = document.body.children;

        for (let i = 0; i < children.length; i++) {
            if (children[i].classList.contains('blur-filter')) children[i].classList.remove('blur-filter');
        }
    }

    const submitTaskFormButton = document.getElementById('btn-create');
    submitTaskFormButton.addEventListener('click', function() {
        const rawInputs = document.getElementsByClassName(`${mode}-form-info`);
        const inputs = Array.from(rawInputs).map(x => x.value);
        inputs.pop();
        if (inputs.some(x => x === '')) return;
        
        const currentProject = document.getElementsByClassName('sidebar-element active');
        const newTask = new Task(inputs[0], inputs[1], inputs[2], inputs[3], inputs[4], currentProject[0].innerHTML);
        const newTaskDiv = createNewTaskDiv(newTask);

        taskTracker.add(newTask);

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