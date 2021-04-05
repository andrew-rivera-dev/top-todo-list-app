import {Project, Task, Tracker} from './logic.js';
import {format} from 'date-fns';

let projectDictionary = new Tracker();
let allProjects = new Project('All Projects');
allProjects.id = 'all-projects-default';
projectDictionary.add(allProjects.id, allProjects);

function extractNumericId(longId) {
    return longId.split('_')[1];
}

//-----------------------Project Manager-----------------------//


function projectManager() {
    
    //Create new project element on button click
    const addProjectForm = document.getElementById('add-project-form');
    addProjectForm.addEventListener('submit', () => {
        const addProjectInput = document.getElementById('add-project-input');
        if (addProjectInput.value === '') return;
    
        const newProjectName = addProjectInput.value;
    
        addProjectInput.value = '';
    
        const newProjectObject = new Project(newProjectName);
        projectDictionary.add(newProjectObject.id, newProjectObject);
    
        const newProjectElement = createProjectElement(newProjectObject);
    
        document.getElementById('sidebar');
        sidebar.appendChild(newProjectElement);
        hideAllTasks();
    });
    
    const allProjectsFolder = document.getElementById('all-projects-default');
    allProjectsFolder.addEventListener('click', () => {
        clearActiveProject();
        allProjectsFolder.classList.add('active');
        renderAllTasks();
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
        newProjectText.id = `projectText_${extractNumericId(newProjectObject.id)}`;
        newProjectText.innerHTML = newProjectObject.name;
    
        newProjectElement.appendChild(newProjectText);
    
        newProjectElement.addEventListener('click', () => {
            clearActiveProject();
            newProjectElement.classList.add('active');
            hideAllTasks();
            renderProjectTasks();
        });
    
        const deleteButton = document.createElement('button');
        deleteButton.type = 'button';
        deleteButton.title = 'Delete project';
        deleteButton.id = `projectDeleteButton_${extractNumericId(newProjectObject.id)}`;
        deleteButton.classList.add('project-delete-button');
    
        const deleteIcon = document.createElement('i');
        deleteIcon.id = `projectDeleteIcon_${extractNumericId(newProjectObject.id)}`;
        deleteIcon.classList.add('bi-x-circle-fill', 'project-delete-icon');
        deleteButton.appendChild(deleteIcon);
        
        deleteButton.addEventListener('click', deleteProject, false);
    
        newProjectElement.appendChild(deleteButton);
    
        return newProjectElement;
    }
    
    function renderAllTasks() {
        const allTasks = document.getElementsByClassName('task');

        for (let i = 0; i < allTasks.length; i++) {
            allTasks[i].style.display = 'flex';
        }
    }

    function hideAllTasks() {
        const allTasks = document.getElementsByClassName('task');

        for (let i = 0; i < allTasks.length; i++) {
            allTasks[i].style.display = 'none';
        }
    }

    function renderProjectTasks() {
        const clickedProject = document.getElementsByClassName('sidebar-element active')[0];
        const projectId = clickedProject.id;
        const projectObject = projectDictionary.getItem(projectId);
        if (!projectObject.tasks) return;

        const projectTasks = Object.values(projectObject.tasks);

        for (let i = 0; i < projectTasks.length; i++) {
            const taskId = projectTasks[i].id;
            const taskElement = document.getElementById(taskId);
            taskElement.style.display = 'flex';
        }
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
        const projectToDelete = document.getElementById(`project_${extractNumericId(clickedDeleteButton.id)}`);
        projectDictionary.remove(projectToDelete.id);
        const sidebar = document.getElementById('sidebar');
        sidebar.removeChild(projectToDelete);
    }
}

//-----------------------Task Manager-----------------------//

function taskManager() {
    const addTaskButton = document.getElementById('add-task');

    addTaskButton.addEventListener('click', function() {
        const addTaskForm = document.getElementById('create-task-form');
        addTaskForm.style.display = 'block';

        document.getElementById('create-form-title').value = '';
        document.getElementById('create-form-description').value = '';
        document.getElementById('create-form-due-date').value = '';
        document.getElementById('create-form-notes').value = '';
        blurPage('create');
    });

    function blurPage(mode) {
        const children = document.body.children;

        for (let i = 0; i < children.length; i++) {
            if (children[i].id !== `${mode}-task-form`) children[i].classList.add('blur-filter');
        }
    }

    function clearFocusedTasks() {
        const tasks = document.getElementsByClassName('focused-task');
        Array.from(tasks).forEach(task => {
            task.classList.remove('focused-task');
        });
    }

    const submitTaskFormButton = document.getElementById('btn-create');
    submitTaskFormButton.addEventListener('click', submitNewTaskForm, false);
    
    function submitNewTaskForm() {
        const rawInputs = document.getElementsByClassName('create-form-info');
        const inputs = Array.from(rawInputs).map(x => x.value);
        
        const currentProject = document.getElementsByClassName('sidebar-element active');
        
        const newTaskObject = new Task(inputs[0], inputs[1], inputs[2], inputs[3], currentProject[0].id, inputs[4]);
        
        const projectObject = projectDictionary.getItem(currentProject[0].id);
        projectObject.addTask(newTaskObject.id, newTaskObject)
        
        const newTaskElement = createTaskElement(newTaskObject);

        const main = document.getElementById('main');
        main.appendChild(newTaskElement);
        closeForm();
    }

    const updateTaskFormButton = document.getElementById('btn-edit');
    updateTaskFormButton.addEventListener('click', submitUpdateTaskForm);

    function submitUpdateTaskForm() {
        const rawInputs = document.getElementsByClassName('edit-form-info');
        const inputs = Array.from(rawInputs).map(x => x.value);

        const currentProject = document.getElementsByClassName('sidebar-element active');

        const newTaskObject = new Task(inputs[0], inputs[1], inputs[2], inputs[3], currentProject[0].id, inputs[4]);

        const projectObject = projectDictionary.getItem(currentProject[0].id);
        const oldTaskElement = document.getElementsByClassName('task focused-task')[0];
        projectObject.removeTask(oldTaskElement.id);
        projectObject.addTask(newTaskObject.id, newTaskObject);

        const newTaskElement = createTaskElement(newTaskObject);

        const main = document.getElementById('main');
        main.replaceChild(newTaskElement, oldTaskElement);
        closeForm();
    }

    const closeFormButtons = document.getElementsByClassName('btn-cancel');
    Array.from(closeFormButtons).forEach(button => button.addEventListener('click', closeForm));


    //--------------------Helper Functions--------------------//

    function createTaskElement(taskObject) {
        const numericId = extractNumericId(taskObject.id);

        const newTaskElement = document.createElement('div');
        newTaskElement.classList.add('task');
        newTaskElement.id = taskObject.id;

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.classList.add('task-checkbox', 'task-property');
        checkbox.id = `checkbox_${numericId}`;

        checkbox.addEventListener('change', function() {
            const parentTask = document.getElementById(taskObject.id);
            if (this.checked) {
                parentTask.style.textDecoration = 'line-through';
            } else {
                parentTask.style.textDecoration = 'none';
            }
        })

        newTaskElement.appendChild(checkbox);

        const title = document.createElement('span');
        title.classList.add('task-title','task-property');
        title.innerHTML = taskObject.title;
        newTaskElement.appendChild(title);

        const description = document.createElement('span');
        description.classList.add('task-description', 'task-property');
        description.innerHTML = taskObject.description;
        newTaskElement.appendChild(description);

        const dueDate = document.createElement('span');
        dueDate.classList.add('task-due-date', 'task-property');
        const dueDateSplit = taskObject.dueDate.split('-');
        const cleanedDate = format(new Date(dueDateSplit[0], dueDateSplit[1], dueDateSplit[2]), 'MMM do');
        dueDate.innerHTML = cleanedDate;
        newTaskElement.appendChild(dueDate);
        
        const priority = document.createElement('span');
        priority.classList.add('task-priority', 'task-property');
        priority.innerHTML = taskObject.priority;
        switch(taskObject.priority) {
            case 'High':
                priority.style.color = '#eb8f8f';
                break;
            case 'Medium':
                priority.style.color = '#faedb1';
                break;
            case 'Low':
                priority.style.color = '#a7fcd9';
        }
        
        newTaskElement.appendChild(priority);

        const editButton = document.createElement('button');
        editButton.type = 'button';
        editButton.title = 'Edit task';
        editButton.id = `taskEditButton_${numericId}`;
        editButton.classList.add('task-edit-button');

        const editIcon = document.createElement('i');
        editIcon.id = `taskEditIcon_${numericId}`;
        editIcon.classList.add('bi-pencil-square', 'task-edit-icon');
        editButton.appendChild(editIcon);

        editButton.addEventListener('click', function() {
            const editTaskForm = document.getElementById('edit-task-form');

            editTaskForm.style.display = 'block';
            
            document.getElementById('edit-form-title').value = taskObject.title;
            document.getElementById('edit-form-description').value = taskObject.description;
            document.getElementById('edit-form-due-date').value = taskObject.dueDate;
            document.getElementById(`edit-${taskObject.priority}`).selected = true;
            document.getElementById('edit-form-notes').value = taskObject.notes;

            blurPage('edit');
        })

        newTaskElement.appendChild(editButton);

        const deleteButton = document.createElement('button');
        deleteButton.type = 'button';
        deleteButton.title = 'Delete task';
        deleteButton.id = `taskDeleteButton_${numericId}`;
        deleteButton.classList.add('task-delete-button');

        const deleteIcon = document.createElement('i');
        deleteIcon.id = `taskDeleteIcon_${numericId}`;
        deleteIcon.classList.add('bi-x-circle-fill', 'task-delete-icon');
        deleteButton.appendChild(deleteIcon);

        deleteButton.addEventListener('click', function() {
            const parentTask = document.getElementById(taskObject.id);
            const projectObject = projectDictionary.getItem(taskObject.projectId);
            projectObject.removeTask(taskObject.id);

            const main = document.getElementById('main');
            main.removeChild(parentTask);
        });

        newTaskElement.appendChild(deleteButton);

        newTaskElement.addEventListener('click', function() {
            clearFocusedTasks();
            newTaskElement.classList.add('focused-task')
        });

        return newTaskElement;
    }

    function closeForm() {
        const forms = document.getElementsByClassName('task-form');
        Array.from(forms).forEach(form => form.style.display = 'none');

        const children = document.body.children;

        for (let i = 0; i < children.length; i++) {
            if (children[i].classList.contains('blur-filter')) children[i].classList.remove('blur-filter');
        }
    }
}

function renderFormFields(mode) {
    const fields = document.createElement('div');

    const titleLabel = document.createElement('label');
    titleLabel.htmlFor = 'title';
    titleLabel.innerHTML = 'Title';
    fields.appendChild(titleLabel);

    const titleInput = document.createElement('input');
    titleInput.type = 'text';
    titleInput.classList.add(`${mode}-form-info`);
    titleInput.id = `${mode}-form-title`;
    titleInput.placeholder = 'Enter title';
    titleInput.maxLength = 20;
    titleInput.name = 'title';
    titleInput.required = true;
    fields.appendChild(titleInput);

    const descriptionLabel = document.createElement('label');
    descriptionLabel.htmlFor = 'description';
    descriptionLabel.innerHTML = 'Description';
    fields.appendChild(descriptionLabel);

    const descriptionInput = document.createElement('input');
    descriptionInput.type = 'text';
    descriptionInput.classList.add(`${mode}-form-info`);
    descriptionInput.id = `${mode}-form-description`;
    descriptionInput.placeholder = 'Enter description';
    descriptionInput.maxLength = 100;
    descriptionInput.name = 'description';
    descriptionInput.required = true;
    fields.appendChild(descriptionInput);

    const dueDateLabel = document.createElement('label');
    dueDateLabel.htmlFor = 'due-date';
    dueDateLabel.innerHTML = 'Due Date';
    fields.appendChild(dueDateLabel);

    const dueDateInput = document.createElement('input');
    dueDateInput.type = 'date';
    dueDateInput.classList.add(`${mode}-form-info`);
    dueDateInput.id = `${mode}-form-due-date`;
    dueDateInput.placeholder = 'Enter due date';
    dueDateInput.name = 'due-date';
    dueDateInput.required = true;
    fields.appendChild(dueDateInput);

    const priorityLabel = document.createElement('label');
    priorityLabel.htmlFor = 'priority';
    priorityLabel.innerHTML = 'Priority';
    fields.appendChild(priorityLabel);

    const priorityInput = document.createElement('select');
    priorityInput.id = `${mode}-form-priority`;
    priorityInput.classList.add(`${mode}-form-info`);
    priorityInput.name = 'priority';
    priorityInput.required = true;

    const highOption = document.createElement('option');
    highOption.id = `${mode}-High`;
    highOption.value = 'High';
    highOption.innerHTML = 'High';
    priorityInput.appendChild(highOption);

    const mediumOption = document.createElement('option');
    mediumOption.id = `${mode}-Medium`;
    mediumOption.value = 'Medium';
    mediumOption.innerHTML = 'Medium';
    priorityInput.appendChild(mediumOption);

    const lowOption = document.createElement('option');
    lowOption.id = `${mode}-Low`;
    lowOption.value = 'Low';
    lowOption.innerHTML = 'Low';
    priorityInput.appendChild(lowOption);

    fields.appendChild(priorityInput);

    const notesLabel = document.createElement('label');
    notesLabel.htmlFor = 'notes';
    notesLabel.innerHTML = 'Notes';
    fields.appendChild(notesLabel);

    const notesInput = document.createElement('textarea');
    notesInput.classList.add(`${mode}-form-info`);
    notesInput.id = `${mode}-form-notes`;
    notesInput.placeholder = 'Enter notes';
    notesInput.maxLength = 250;
    notesInput.name = 'notes';
    fields.appendChild(notesInput);

    const taskForm = document.getElementById(`${mode}-task-form`);
    const taskFormButtons = document.getElementById(`${mode}-task-form-button-container`);
    taskForm.insertBefore(fields, taskFormButtons);
}



export {
    projectManager,
    taskManager,
    renderFormFields,
}