/*
    Define a variable named `notes` and assign a value of an empty array
*/

/*
    Fill the array with several starter objects that have
    the following properties.
        * id (number)
        * text (string)
        * author (string)
        * date (string)
        * topics (array of strings)

    Either define the objects within the initial array or
    use the .push() method to add them after initialization.
*/
let notes = [{
    id: 1,
    text: "I don't have a favorite color.",
    author: "Simone",
    date: "August 18th",
    topics: ["Months", "Name", "Color"]
}]

/* 
    fill the empty array with a set of three objects 
*/
notesTwo = { // combine objects 2-4 with object one 
    id: 2,
    text: "My favorite food is spaghetti",
    author: "Simone",
    date: "August 18th",
    topics: ["ID number", "Name", "Food"]
}
notesThree = {
    id: 3,
    text: "My favorite season is winter",
    author: "Simone",
    date: "August 18th",
    topics: ["ID number", "Me", "Season"]
}
// first exercise 
//combines notes one, two, and three so they can be logged using .push() function

notes.push(notesTwo); 
notes.push(notesThree);

//for loop loops through each individual note of "notes"

for (const note of notes) { 
    console.log(note.text)
}

//write out the string "*** All note topics ****"

console.log("*** All Note Topics***")


//challenge Two- average note topics per note
//log to the console that this is the average of all note topics 
///instantiating a variable

console.log("*** Average Topics Per Note ***")
let totalTopics = 0 
for (const note of notes) {
    totalTopics += note.topics.length
}

const averageTopics = totalTopics / notes.length
console.log(`${averageTopics}`)

//challenge three, filter notes that include the string "ID number"

console.log("*** Notes that contain the topic ***")
const filteredNotes = []
let criteria = "ID number"

for (const note of notes) {
    if (note.topics.includes(criteria)) {
        filteredNotes.push(note)
    }
}

//converting to a function  

function GetFilteredNotes(criteria, notes) {
    const filteredNotes = []

    for (const note of notes) {
        if (note.topics.includes(criteria)) {
            filteredNotes.push(note)
        }
    }
    return filteredNotes;
}



console.log(GetFilteredNotes("ID number", notes))

//script tags exercise 



console.log("*** Note Articles ***") 

for (const note of notes) {
    console.log(`<article>${note.text}</article>`)
}
