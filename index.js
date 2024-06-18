let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")

let initialHomeScore = 0
let initialGuestScore = 0

homeScore.innerText = 0
guestScore.innerText = 0

function homeIncrementOne() {
    initialHomeScore += 1
    homeScore.innerText = score
}


function homeIncrementTwo() {
    initialHomeScore += 2
    homeScore.innerText = score
}

function homeIncrementThree() {
    initialHomeScore += 3
    homeScore.innerText = score
}

function guestIncrementOne() {
    initialGuestScore += 1
    guestScore.innerText = score
}


function guestIncrementTwo() {
    initialGuestScore += 2
    guestScore.innerText = score
}

function guestIncrementThree() {
    initialGuestScore += 3
    guestScore.innerText = score
}

function restart() {
    initialHomeScore = 0
    initialGuestScore = 0
    guestScore.innerText =  initialGuestScore
    homeScore.innerText =  initialHomeScore
}
