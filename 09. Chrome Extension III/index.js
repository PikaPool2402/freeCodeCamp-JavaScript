let myLeads = []
const inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn")

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
console.log(leadsFromLocalStorage)

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    // need to pass argument now
    render(myLeads)
}

// const tabs = [
//     {url: "https://www.linkedin.com/in/kush-gupta-275b94221/"}
// ]

// implement the save tab feature
tabBtn.addEventListener("click", function() {
    // grab the URL of the current tab using Google Chrome API, stored in "tabs" variable
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))

        render(myLeads)
    })

    // myLeads.push(tabs[0].url)
    // // console.log(tabs[0].url)
    // localStorage.setItem("myLeads", JSON.stringify(myLeads))

    // render(myLeads)
})

// make the function dynamic with parameters
function render(leads) {
    let listItems = ""

    for (let i = 0; i < leads.length; i++) {
        listItems += `
            <li>
                <a target="_blank" href="${leads[i]}">
                    ${leads[i]}
                </a>
            </li>
        `
    }
    
    ulEl.innerHTML = listItems
}

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    
    // store the links/leads in local storage
    localStorage.setItem("myLeads", JSON.stringify(myLeads))

    render(myLeads)
})

deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear()
    myLeads = []

    render(myLeads)
})

// final deployment, go to
// chrome://extensions