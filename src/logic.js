class Project {
    constructor(name) {
        this.name = name;
    }

    setName(newName) {
        this.name = newName;
    }     
}

class Task {
    constructor (title, description, dueDate, priority, notes, project) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.notes = notes || '';
        this.priority = priority;

        this.project = project;
    }
}

class Tracker {
    constructor() {
        this.items = [];
    }

    add(item) {
        this.items.push(item);
    }

    remove(item) {
        this.items.splice(this.items.indexOf(item), 1);
    }

    getItems() {
        return this.items;
    }
}

let projectTracker = new Tracker();
let taskTracker = new Tracker();

export {
    Project,
    Task,
    Tracker,
    projectTracker,
    taskTracker,
}