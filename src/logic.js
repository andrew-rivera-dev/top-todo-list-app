import {v4 as uuidv4} from 'uuid';

class Project {
    constructor(name) {
        this.name = name;
        this.id = `project_${uuidv4()}`;
        this.tasks = [];
    }
    
    addTask(task) {
        this.tasks.push(task);
    }
}

class Task {
    constructor (title, description, dueDate, priority, project, notes = '') {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.project = project;
        this.id = `task_${uuidv4}`;
        this.notes = notes;
    }
}

class Tracker {
    constructor() {
        this.items = {};
    }

    add(key, value) {
        this.items[key] = value;
    }

    remove(key) {
        delete this.items[key];
    }

    getItems() {
        return this.items;
    }
}

export {
    Project,
    Task,
    Tracker,
}