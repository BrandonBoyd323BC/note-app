let notes = getSavedNotes()
// What is the file here? 
const filters = {
    searchText: ''
}

renderNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click', (e) => {
    const id = uuidv4()
    notes.push({
        id: id,
        title: '',
        body: ''
    })
    saveNotes(notes)
    location.assign(`/edit.html#${id}`)
})

document.querySelector('#search-text').addEventListener('input', (e) => {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})

document.querySelector('#label-id').addEventListener('change', (e) => {
    console.log(e.target.checked)
})

document.querySelector('#filter-by').addEventListener('change', (e) => {
    console.log(e.target.value)
})

window.addEventListener('storage', (e) => {
    if (e.key === 'notes') {
        notes = JSON.parse(e.newValue)
        renderNotes(notes, filters)
    }
    
})

const now = moment()
console.log(now.toString())
//MY way works. Andrw had a single digit day birthday.
const myBirthdayTimestamp = moment('July 28, 1984').valueOf()
const myBirthday = moment(myBirthdayTimestamp).format('MMM d, YYYY')
console.log(myBirthday)


const birthday = moment()
birthday.year(1984).month(6).date(28)


console.log(birthday.format('MMM d, YYYY'))
