
const source = new EventSource('/notifications') // our source is the stream endpoint, not index

function onLoad() {
    source.addEventListener('message', (e) => {
        const dataJSON = JSON.parse(e.data)
        const dataSpan = document.getElementById('data')
        console.log('lalala',dataJSON.projects.name)
        dataSpan.innerHTML = dataJSON.projects.name
    })
}

function onUnload() {
    source.close()
}