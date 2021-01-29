//Reading exisitng noted from localStorage
const getSavedNotes = () => {

    const notesJSON = localStorage.getItem('notes')

    if (notesJSON !== null) {
        return JSON.parse(notesJSON)
    } else {
        return []
    }
}

//Save Note
const saveNotes = (notes) => {
    return localStorage.setItem('notes', JSON.stringify(notes))
}

//Delete Note
const deleteNote = (id) => {
    const noteIndex = notes.findIndex((note) => {
        return note.id === id
    })

    if (noteIndex > -1) {
        notes.splice(noteIndex, 1)
    }
}

//Generate new note DOM structure
const generateNoteDOM = (note) => {
    
    const noteElement = document.createElement('div')
    const textElement = document.createElement('a')
    textElement.innerText = note.title
    const button = document.createElement('button')
    
    //Delete Button
    button.textContent = 'x'
    noteElement.appendChild(button)
    button.addEventListener('click', () => {
        deleteNote(note.id)
        saveNotes(notes)
        renderNotes(notes, filters)
    })

    //Note text
    if (note.title.length > 0) {
        textElement.textContent = note.title           
    } else {
        textElement.textContent = 'Untitled Note' 
    }
    
    textElement.setAttribute('href', `/edit.html#${note.id}`)
    noteElement.appendChild(textElement)

    return noteElement
}

//Render Application Notes
const renderNotes = (notes, filters) => {
    const filterNotes = notes.filter((note) => {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    document.querySelector('#notes').innerHTML = ''

    filterNotes.forEach((note) => {
        const noteElement = generateNoteDOM(note)
        document.querySelector('#notes').appendChild(noteElement)
    })
}
