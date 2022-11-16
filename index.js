// HOME 
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


// AWAY 
let awayScoreDisplay = document.getElementById("awayScoreDisplay")
let awayScore = 0

function awayScoreOne(){
    awayScore += 1
    awayScoreDisplay.textContent = awayScore
}

function awayScoreTwo(){
    awayScore += 2
    awayScoreDisplay.textContent = awayScore
}

function awayScoreThree(){
    awayScore += 3
    awayScoreDisplay.textContent = awayScore
}