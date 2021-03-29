//import {projectFactory, taskFactory} from './object-factory'

const projectList = () => {
    const projects = [];

    const add = (project) => {
        projects.push(project)
    }

    const remove = (project) => {
        projects.splice(projects.indexOf(project), 1);
    }

    const getProjects = () => {
        return projects;
    }
}

const taskList = () => {
    const tasks = [];

    const add = (task) => {
        tasks.push(task)
    }

    const remove = (task) => {
        tasks.splice(tasks.indexOf(task), 1);
    }

    const getTasks = () => {
        return tasks;
    }
}