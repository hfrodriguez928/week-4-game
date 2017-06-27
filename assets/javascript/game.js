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

//Wins & losses
var winCount = 0;
var lostCount = 0;


// Random helper function
var getRandom = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}


var startgame = function () {
    // reset current score

    // new target score
    targetScore = getRandom(19, 120);

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
    addValue(crystal.blue);
});

$("#green").click(function () {
    addValue(crystal.green);
});

$("#red").click(function () {
    addValue(crystal.red);
});

$("#yellow").click(function () {
    addValue(crystal.yellow);
});
        
     $('#yourScore').text(counter);

            if (counter == targetScore){
              $('#status').text('You won!!!!');
              wins ++;
              $('#winCounter').text(wins);
              console.log(wins)
              $('#crystal').empty();
              newCrystals();
              newGame();
                
            } else if ( counter > targetScore){
                $('#status').text('You lost!')
                losses ++;
                $('#lossCounter').text(losses);
                console.log(losses)
                $('#crystal').empty();
                newCrystals();
                newGame();
            }
        };
    }

};
