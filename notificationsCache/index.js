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
    setTasks(Tasks) {
        this.Tasks = Tasks
    },
    setProjects(projects) {
        this.projects = projects
        console.log('newProjects', this.projects)
    }
}

module.exports = state
