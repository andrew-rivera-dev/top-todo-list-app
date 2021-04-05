import {v4 as uuidv4} from 'uuid';

class Project {
    constructor(name) {
        this.name = name;
        this.id = `project_${uuidv4()}`;
        this.tasks = {};
    }
    
    addTask(key, value) {
        this.tasks[key] = value;
    }

    removeTask(key) {
        delete this.tasks[key];
    }
}

class Task {
    constructor (title, description, dueDate, priority, projectId, notes = '') {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.projectId = projectId;
        this.id = `task_${uuidv4()}`;
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

    getItem(id) {
        return this.items[`${id}`];
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