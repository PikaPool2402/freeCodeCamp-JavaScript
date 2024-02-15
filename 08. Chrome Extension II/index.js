let myLeads = []
// use const, if no reassignment required, as a good practice
const inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")

// fetch items from localStorage, convert the string back into an array
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
console.log(leadsFromLocalStorage)

// if truthy, display the leads
if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    renderLeads()
}

deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear()
    myLeads = []

    renderLeads()
})

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""

    // store the links/leads in local storage
    localStorage.setItem("myLeads", JSON.stringify(myLeads))

    renderLeads()
})

function renderLeads() {
    let listItems = ""

    for (let i = 0; i < myLeads.length; i++) {
        // listItems += "<a target='_blank' href=' " + myLeads[i] + " '><li>" + myLeads[i] + "</li></a>"
        // cannot break string into multiple lines!
        // simplify using template strings!

        listItems += `
            <li>
                <a target="_blank" href="${myLeads[i]}">
                    ${myLeads[i]}
                </a>
            </li>
        `
    }
    // can break string into multiple lines!

    ulEl.innerHTML = listItems
    // used innerHTML only once, faster perfomance!
    // optimizing performance of extension, innerHTML manipulates DOM, performance heavy!
}

// LOCAL STORAGE
// localStorage used to store data, even after refresh
// localStorage.setItem("myLeads", "www.example.com")
// console.log(localStorage.getItem("myLeads"))

// SYNTAX
// both key and value need to be strings!
// localStorage.setItem(key, value)
// localStorage.getItem(key)
// localStorage.clear()

// FUNCTIONS
let exampleArray = `["www.example.com"]` // array turned into string
exampleArray = JSON.parse(exampleArray) // string turned into array
exampleArray.push("www.lead2.com") // push new element into array
exampleArray = JSON.stringify(exampleArray) // array to string
// console.log(typeof exampleArray)

// TRUTHY & FALSY
// falsy values signalize emptiness
// truthy values signalize true value

// false
// 0
// ""
// null -> how you as a developer signalize emptiness
// undefined -> how JavaScript signalizes emptiness
// NaN

// Boolean() to check truthy/falsy
// console.log(Boolean(""))    // falsy
// console.log(Boolean("0"))   // truthy
// console.log(Boolean(100))   // truthy
// console.log(Boolean(null))  // falsy
// console.log(Boolean([0]))   // truthy
// console.log(Boolean(-0))    // falsy