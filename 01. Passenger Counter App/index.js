// VARIABLES & OPERATIONS
// let firstBatch = 5
// let secondBatch = 7

// let count = firstBatch + secondBatch
// console.log(count)


// REASSIGNING & INCREMENTING
// let count = 5
// count = 3

// count = count + 1
// console.log(count)


// FUNCTIONS
let count = 0
let countEl = document.getElementById("count-el")
// used to refer to the HTML element

function increment() {
    count = count + 1
    countEl.innerText = count
    // used to modify the HTML element

    console.log(count)
}


// STRINGS
// let username = "Kush"
// let message = "You have three new notifications"

// console.log(message + ", " + username + "!")

// let points = 4
// let bonusPoints = "10"

// integer is converted to string
// console.log(points + bonusPoints)


// implement save function
let saveEl = document.getElementById("save-el")

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    // increment the string to not overwrite the previous string

    count = 0
    countEl.textContent = 0
    // reset count to 0 after save button

    console.log(count)
}