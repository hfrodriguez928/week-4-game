
$(document).ready(function() {

var crystal = {
    blue: {
        name: "blue",
        value: 0
    },
    green: {
        name: "green",
        value: 0
    },
    red: {
        name: "red",
        value: 0
    },
    yellow: {
        name: "yellow",
        value: 0
    }
};


//Scores
var currentScore = 0;
var targetScore = 0;
// var counter = 0;

//Wins & losses
var winCount = 0;
var lossCount = 0;


// Random helper function
var getRandom = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}


var startgame = function () {
    // reset current score

    // new target score
    targetScore = getRandom(19, 120);
    currentScore = 0;

    // Give the crystals random values
    crystal.blue.value = getRandom(1, 12);
    crystal.green.value = getRandom(1, 12);
    crystal.red.value = getRandom(1, 12);
    crystal.yellow.value = getRandom(1, 12);

$("#your-score").html(currentScore);
$("#target-score").html(targetScore);

console.log("Target Score " + targetScore);
console.log("blue " + crystal.blue.value  + "| green: " + crystal.green.value+ "| red: " + crystal.red.value+ 
"| yellow: " + crystal.yellow.value );

}

startgame();
// Click events for the crystals
$("#blue").click(function () {
    addValue(crystal.blue.value);
    testVictory();
});

$("#green").click(function () {
    addValue(crystal.green.value);
    testVictory();
});

$("#red").click(function () {
    addValue(crystal.red.value);
    testVictory();
});

$("#yellow").click(function () {
    addValue(crystal.yellow.value);
    testVictory();
});

var addValue = function (numInput) {

    // crystal.blue.value = getRandom(1, 12);
    // crystal.green.value = getRandom(1, 12);
    // crystal.red.value = getRandom(1, 12);
    // crystal.yellow.value = getRandom(1, 12);
    currentScore = currentScore + numInput;
    $("#your-score").html(currentScore);
}
        
    
 function testVictory() {
            if (currentScore === targetScore){
              $('#status').text('You won!!!!');
              winCount ++;
              $('#winCounter').text(winCount);
              console.log(winCount)
              $('#crystal').empty();
              // newCrystals();
              startgame();
                
            } else if ( currentScore > targetScore){
                $('#status').text('You lost!')
                lossCount ++;
                $('#lossCounter').text(lossCount);
                console.log(lossCount)
                $('#crystal').empty();
                // newCrystals();
                startgame();
            }
        }

});  // closes document.ready