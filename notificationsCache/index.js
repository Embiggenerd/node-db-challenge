const state = {
    resources: {
        id: null,
        name: "",
        descripton: ""
    },
    projects: {
        id: null,
        name: "",
        description: "",
        completed: false,
    },
    tasks: {
        id: null,
        description: "",
        completed: false,
        notes: ""
    },
    setResources(resources) {
        this.resources = resources
    },
    setTasks(tasks) {
        this.tasks = tasks
    },
    setProjects(projects) {
        this.projects = projects
    }
}

module.exports = state
