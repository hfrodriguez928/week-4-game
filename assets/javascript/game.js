var crystal = {
    blue: {
        name: "Blue",
        value: 0
    },
    green: {
        name: "Green",
        value: 0
    },
    red: {
        name: "Red",
        value: 0
    },
    yellow: {
        name: "Yellow",
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
    currentScore = 0;

    // new target score
    targetScore = getRandom(19, 120);

    // Give the crystals random values
    crystal.blue.value = getRandom(1, 12);
    crystal.green.value = getRandom(1, 12);
    crystal.red.value = getRandom(1, 12);
    crystal.yellow.value = getRandom(1, 12);

console.log("Target Score " + targetScore);
console.log("Blue " + crystal.blue.value  + "| Green: " + crystal.green.value+ "| Red: " + crystal.red.value+ 
"| Yellow: " + crystal.yellow.value );

}

startgame();
// Click events for the crystals
$("#blue").click(function () {
    addValue(crystal.blue);
});

$("#green").click(function () {
    alert("Tester");
});

$("#red").click(function () {
    alert("Testerr");
});

$("#yellow").click(function () {
    alert("Testery");
});

function roundComplete(){
  console.log("Win Count: " + winCount + " | Lost Count: " + lostCount);