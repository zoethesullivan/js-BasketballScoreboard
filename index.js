// HOME FUNCTIONS
let homeScoreDisplay = document.getElementById("homeScoreDisplay")
let homeScore = 0

function homeScoreOne(){
    homeScore += 1
    homeScoreDisplay.textContent = homeScore
}

function homeScoreTwo(){
    homeScore += 2
    homeScoreDisplay.textContent = homeScore
}

function homeScoreThree(){
    homeScore += 3
    homeScoreDisplay.textContent = homeScore
}


// GUEST 
let guestScoreDisplay = document.getElementById("guestScoreDisplay")
let guestScore = 0

function guestScoreOne(){
    guestScore += 1
    guestScoreDisplay.textContent = guestScore
}

function guestScoreTwo(){
    guestScore += 2
    guestScoreDisplay.textContent = guestScore
}

function guestScoreThree(){
    guestScore += 3
    guestScoreDisplay.textContent = guestScore
}