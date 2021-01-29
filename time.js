
const now =  new Date()
// console.log(now.toString())
// console.log(now.getTime())

const dateOne = new Date(`December 29 2001 23:35:46`)
const dateTwo = new Date(`January 26 1975 04:02:26`)

const dateOneTimeStamp = dateOne.getTime()
const dateTwoTimeStamp = dateTwo.getTime()

if (dateOneTimeStamp < dateTwoTimeStamp) {
    console.log(`Date One ${dateOne.toString()}`)
} else if (dateTwoTimeStamp < dateOneTimeStamp) {
    console.log(`Date Two ${dateTwo.toString()}`)
} else {
    console.log(``)
}