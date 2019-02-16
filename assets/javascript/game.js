// establishes wins and losses default when page is opened
var wins = 0;
var losses = 0;
$("#wins").text(wins);
$("#losses").text(losses);

// generates random desired number player is trying to get to (19-120)
var desiredNumber = Math.floor(Math.random() * (120 - 19 + 1) + 19);
$("#num-goal").text(desiredNumber);

var numberOptions = [];
for (var i = 0; i < 4; i++) {
    numberOptions[i] = Math.floor(Math.random() * 12) + 1;
    console.log(numberOptions);
};
$("#crystal-1").val(numberOptions[0]);
$("#crystal-2").val(numberOptions[1]);
$("#crystal-3").val(numberOptions[2]);
$("#crystal-4").val(numberOptions[3]);

console.log($("#crystal-1").val());

// sets player's current total to 0 and they will build on it
var sum = 0;
$("#total").text(sum);

$(".crystal").on("click", function () {
    var crystalVal = $(this).val();
    console.log(crystalVal);
    sum += crystalVal;
    $("#total").text(sum);
    console.log(sum);
    if (sum === desiredNumber) {
        wins++;
        $("#wins").text(wins);
        alert("You win!");
    }
    else if (sum > desiredNumber) {
        losses++;
        $("#losses").text(losses);
        alert("You lose!");
    }
});


    // generates random desired number player is trying to get to (19-120)
    // var desiredNumber = Math.floor(Math.random() * (120 - 19 + 1) + 19);
    // $("#num-goal").text(desiredNumber);
    // generates random numbers for each crystal (1-12)
    // var crystalNum1 = Math.floor(Math.random() * 12) + 1
    // $("#crystal-1").text(crystalNum1);
    // var crystalNum2 = Math.floor(Math.random() * 12) + 1
    // $("#crystal-2").text(crystalNum1);
    // var crystalNum3 = Math.floor(Math.random() * 12) + 1
    // $("#crystal-3").text(crystalNum1);
    // var crystalNum4 = Math.floor(Math.random() * 12) + 1
    // $("#crystal-4").text(crystalNum1);

    // click commands for each crystal
    // $("#crystal-1").on("click", function () {
    //     sum += crystalNum1;
    //     $("#total").text(sum);
    //     console.log(sum);
    //     if (sum === desiredNumber) {
    //         wins++;
    //         $("#wins").text(wins);
    //         alert("You win!");
    //     }
    //     else if (sum > desiredNumber) {
    //         losses++;
    //         $("#losses").text(losses);
    //         alert("You lose!");
    //     }
    // });
    // $("#crystal-2").on("click", function () {
    //     sum += crystalNum2;
    //     $("#total").text(sum);
    //     console.log(sum);
    //     if (sum === desiredNumber) {
    //         wins++;
    //         $("#wins").text(wins);
    //         alert("You win!");
    //     }
    //     else if (sum > desiredNumber) {
    //         losses++;
    //         $("#losses").text(losses);
    //         alert("You lose!");
    //     }
    // });
    // $("#crystal-3").on("click", function () {
    //     sum += crystalNum3;
    //     $("#total").text(sum);
    //     console.log(sum);
    //     if (sum === desiredNumber) {
    //         wins++;
    //         $("#wins").text(wins);
    //         alert("You win!");
    //     }
    //     else if (sum > desiredNumber) {
    //         losses++;
    //         $("#losses").text(losses);
    //         alert("You lose!");
    //     }
    // });
    // $("#crystal-4").on("click", function () {
    //     sum += crystalNum4;
    //     $("#total").text(sum);
    //     console.log(sum);
    //     if (sum === desiredNumber) {
    //         wins++;
    //         $("#wins").text(wins);
    //         alert("You win!");
    //     }
    //     else if (sum > desiredNumber) {
    //         losses++;
    //         $("#losses").text(losses);
    //         alert("You lose!");
    //     }
    // });

