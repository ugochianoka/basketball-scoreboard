let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")

let score = 0

homeScore.innerText = 0
guestScore.innerText = 0

function homeIncrementOne() {
    score += 1
    homeScore.innerText = score
}


function homeIncrementTwo() {
    score += 2
    homeScore.innerText = score
}

function homeIncrementThree() {
    score += 3
    homeScore.innerText = score
}

function guestIncrementOne() {
    score += 1
    guestScore.innerText = score
}


function guestIncrementTwo() {
    score += 2
    guestScore.innerText = score
}

function guestIncrementThree() {
    score += 3
    guestScore.innerText = score
}

function restart() {
    score = 0
    guestScore.innerText = score
    homeScore.innerText = score
}