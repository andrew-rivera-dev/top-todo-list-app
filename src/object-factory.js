const projectFactory = (name) => {
    return {
        name
    }
}


const taskFactory = (title, description, dueDate, priority) => {
    return {
        title,
        description,
        dueDate,
        priority
    }
}

export {projectFactory, taskFactory}