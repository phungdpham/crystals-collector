
$(document).ready(function() {
//Select a random number between 24 and 125 that stars to display at the beginning
var randomNum = Math.floor(Math.random() * 50) + 12;

//Append random number to the randonNumber id in html
$("#randomNumber").text(randomNum);

//Set up randum number for each crystal. This number is between 1 and 12.
var num1 = Math.floor(Math.random() *19) + 1;
var num2 = Math.floor(Math.random() *19) + 1;
var num3 = Math.floor(Math.random() *19) + 1;
var num4 = Math.floor(Math.random() *19) + 1;

//Create variable to track user's result
var userScore = 0;
var wins = 0;
var losses = 0;

//Append the results to html
$("#numberWins").text(wins);
$("#numberLosses").text(losses);

//Reset this game
function reset() {
    randomNum = Math.floor(Math.random()*50) + 12;
    $("#randomNumber").text(randomNum);

    num1 = Math.floor(Math.random() * 19) + 1;
    num2 = Math.floor(Math.random() * 19) + 1;
    num3 = Math.floor(Math.random() * 19) + 1;
    num4 = Math.floor(Math.random() * 19) + 1;
    userScore = 0;
    $("#finalTotalScore").text(userScore);
}

//Add wins to the userScore
function addWins() {
    wins ++;
    $("#numberWins").text(wins);
    $("#alert").html("<span>You won!</span>");
    reset();
}

//Add losses to the userScore
function addLosses() {
    losses ++;
    $("#numberLosses").text(losses);
    $("#alert").html("<span>You Lost!</span>");
    reset();
}

// Set up click function on crystal

    //click on blue scrytal
    $("#blueCrystal").on("click", function(){
        userScore = userScore + num1;
        $("#finalTotalScore").text(userScore);
        //Set win or loss condition
        if (userScore == randomNum){
            addWins();
        }
        else if (userScore > randomNum) {
            addLosses();
        }
    });

    //click on green crystal
    $("#greenCrystal").on("click", function(){
        userScore = userScore + num2;
        $("#finalTotalScore").text(userScore);
        //Set win or loss condition
        if (userScore == randomNum){
            addWins();
        }
        else if (userScore > randomNum) {
            addLosses();
        }   
    });

    //click on red crystal
    $("#redCrystal").on("click", function(){
        userScore = userScore + num3;
        $("#finalTotalScore").text(userScore);
        //Set win or loss condition
        if (userScore == randomNum){
            addWins();
        }
        else if (userScore > randomNum) {
            addLosses();
        }   
    });

    //click on yellow crystal
    $("#yellowCrystal").on("click", function(){
        userScore = userScore + num4;
        $("#finalTotalScore").text(userScore);
        //Set win or loss condition
        if (userScore == randomNum){
            addWins();
        }
        else if (userScore > randomNum) {
            addLosses();
        }   
    });


});