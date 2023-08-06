const homeScore = document.getElementById("home-score")
const guestScore = document.getElementById("guest-score")

let home = 0
let guest = 0

function addOneHome() {
    home += 1
    homeScore.textContent = home
}

function addTwoHome() {
    home += 2
    homeScore.textContent = home
}

function addThreeHome() {
    home += 3
    homeScore.textContent = home
}

function addOneGuest() {
    guest += 1
    guestScore.textContent = guest
}

function addTwoGuest() {
    guest += 2
    guestScore.textContent = guest
}

function addThreeGuest() {
    guest += 3
    guestScore.textContent = guest
}
