// establishes wins and losses default when page is opened
var wins = 0;
var losses = 0;
$("#wins").text(wins);
$("#losses").text(losses);
// sets up some global variables
var desiredNumber = 0;
var numberOptions = [];
var sum = 0;

// function to generate fresh numbers 
function numGen() {
    // generates random desired number player is trying to get to (19-120)
    // 102 comes from: 120-19+1 from stack overflow answer (max-min+1)+min
    desiredNumber = Math.floor(Math.random() * (102) + 19);
    $("#num-goal").text(desiredNumber);
    // loops to generate 4 random crystal numbers
    for (var i = 0; i < 4; i++) {
        numberOptions[i] = Math.floor(Math.random() * 12) + 1;
    };
    // assigns numbers to crystals
    $("#crystal-1").val(numberOptions[0]);
    $("#crystal-2").val(numberOptions[1]);
    $("#crystal-3").val(numberOptions[2]);
    $("#crystal-4").val(numberOptions[3]);
    // sets player's current total to 0 and they will build on it by clicking crystals
    sum = 0;
    $("#total").text(sum);

};
// calls numGen function to intialize game
numGen();

// function for when any crystal is clicked
$(".crystal").on("click", function () {
    $("#outcome").text("");
    var crystalVal = $(this).val();
    crystalVal = parseInt(crystalVal);
    sum += crystalVal;
    $("#total").text(sum);
    // if they win
    if (sum === desiredNumber) {
        wins++;
        $("#wins").text(wins);
        $("#outcome").text("You win!")
        numGen();
    }
    // if the lose
    else if (sum >= desiredNumber) {
        losses++;
        $("#losses").text(losses);
        $("#outcome").text("You lose!")
        numGen();
    }
});


