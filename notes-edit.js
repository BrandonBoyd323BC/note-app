const noteId = location.hash.substring(1)
const noteTitle = document.querySelector('#note-title')
const noteBody = document.querySelector('#note-body')
const removeNoteElement = document.querySelector('#remove-note')
let notes = getSavedNotes()
let note = notes.find((note) => {
    return note.id === noteId
})

if (note === undefined) {
    location.assign('/index.html')
}

//Title Change
noteTitle.value = note.title
noteTitle.addEventListener('input', (e) => {
    note.title = e.target.value
    saveNotes(notes)
})

//Body Change
noteBody.value = note.body
noteBody.addEventListener('input', (e) => {
    note.body = e.target.value
    saveNotes(notes)
})

//Delete Note
removeNoteElement.addEventListener('click', () => {
    deleteNote(note.id)
    saveNotes(notes)
    location.assign('/index.html')
})

window.addEventListener('storage', (e) => {
    if (e.key === 'notes') {
        notes = JSON.parse(e.newValue)
        let note = notes.find((note) => {
            return note.id === noteId
        })
        
        if (note === undefined) {
            location.assign('/index.html')
        }
        noteTitle.value = note.title
        noteBody.value = note.body
    }
})
