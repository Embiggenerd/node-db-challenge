
const source = new EventSource('/notifications') // our source is the stream endpoint, not index

function onLoad() {
    source.addEventListener('message', (e) => {
        const dataJSON = JSON.parse(e.data)
        const project = document.getElementById('data-project-name')
        project.innerHTML = dataJSON.projects.name
        const resource = document.getElementById('data-resource-name')
        resource.innerHTML = dataJSON.resources.name
        const task = document.getElementById('data-task-description')
        task.innerHTML = dataJSON.tasks.description
    })
}

function onUnload() {
    source.close() // Helps cleanup server side
}