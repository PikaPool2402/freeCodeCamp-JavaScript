let sum = 0
let message = ""

let hasBlackJack = false
let isAlive = false

let sumEl = document.querySelector("#sum-el")
// let sumEl = document.getElementById("sum-el")
let cardsEl = document.querySelector("#cards-el")
let messageEl = document.getElementById("message-el")

// let cards = [firstCard, secondCard]
// array - ordered list of items, 0 indexed
// console.log(cards.length)

// OBJECTS
let player = {
    name: "Kush",
    chips: 145
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

function startGame() {
    // to define the state of the game after clicking the start button
    // also lets us reset the game after clicking the start button
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]

    sum = firstCard + secondCard
    isAlive = true
    
    renderGame()
}

function renderGame() {
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }

    messageEl.textContent = message
    sumEl.textContent = "Sum: " + sum
    // cardsEl.textContent = "Cards: " + cards[0] + ", " + cards[1]
    // cardsEl.textContent = "Cards: " + firstCard + ", " + secondCard
    
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        // loop for displaying updated cards being added at runtime
        cardsEl.textContent += cards[i] + " "
    }
}

function newCard() {
    if (hasBlackJack === false && isAlive === true) {
        let card = getRandomCard()

        sum += card
        cards.push(card)
        // append operation on array
        
        renderGame()
    } 
}

function getRandomCard() {
    let randomCard = Math.floor(Math.random() * 13) + 1
    // add 1 to change range from 0-12 to 1-13
    // return random number from 1 to 13
    
    if (randomCard === 1) {
        return 11
    } else if (randomCard > 10) {
        return 10
    } else{
        return randomCard
    }
}