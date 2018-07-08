//Saving the html elements as JavaScript variables
var number1 = document.getElementById("number1");
var operator = document.getElementById("operator");
var number2 = document.getElementById("number2");
var score = document.getElementById("scoreNum");
var equals = document.getElementById("equals");
var playerLevel = document.getElementById("playerLevel");
var input = document.getElementById("answer");
//Variables for random numbers
var num1 = 0;
var num2 = 0;
var operation = null;
//Variable for score
var currentScore = 0;
score.innerHTML = currentScore
//Difficulty
var difficulty = 1;
var randomNumber = 10;
playerLevel.innerHTML ="Easy";
//Array of operations
var myOperations = [{
    sign: "+",
    method: function(a,b){ return a + b; }
},{
    sign: "-",
    method: function(a,b){ return a - b; }
},{
    sign: "x",
    method: function(a,b){ return a * b; }
}];

function generateNumbers(){
    if(currentScore <= 5){
        diffculty = 1;
        randomNumber = 10;
        playerLevel.innerHTML ="Easy";
    }
    if(currentScore > 5 && currentScore <= 10){
        difficulty = 2;
        randomNumber = 25;
        playerLevel.innerHTML ="Intermediate";
    }
    if(currentScore > 10){
        difficulty = 3;
        randomNumber = 50;
        playerLevel.innerHTML ="Difficult";
    }
    num1 = Math.floor((Math.random()*randomNumber)+1);
    num2 = Math.floor((Math.random()*randomNumber)+1);
    operation = Math.floor(Math.random()*myOperations.length);
    input.style.display = "block";
    //Changing HTML
    number1.innerHTML = num1;
    operator.innerHTML = myOperations[operation].sign;
    number2.innerHTML = num2;
    equals.innerHTML = "=";
    console.log(difficulty);
}

function generateAnswer() {
    var answer = myOperations[operation].method(num1, num2);
    if(input.value == answer) {
        ++currentScore;
        score.innerHTML = currentScore;
        input.value = '';
        generateNumbers()
    }else{
        currentScore = 0;
        score.innerHTML = currentScore;
        input.value = '';
        generateNumbers()
        
    }
}