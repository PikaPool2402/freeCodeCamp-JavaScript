let myLeads = ["www.google.com", "www.facebook.com", "www.bing.com"]
// const variable cannot be re-assigned
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")

// alternate for onlick event listener in HTML
inputBtn.addEventListener("click", function() {
    // grab value from input field
    myLeads.push(inputEl.value)
    console.log(myLeads)
})

const ulEl = document.getElementById("ul-el")
// render out saved elements in a list

for (let i = 0; i < myLeads.length; i++) {
    ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"
    // innerHTML parses the "<li>" strings as HTML elements

    // const liEl = document.createElement("li")
    // liEl.textContent += myLeads[i]
    // ulEl.append(liEl)
}