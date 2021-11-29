// Variable definition
const Question1 = "1. It is a block of code designed to perform a particular task";
const Answer11 = "Variable";
const Answer12 = "Function"; //right one
const Answer13 = "Constant";
const Answer14 = "Event";
const Question2 = "2. What is the right syntax to include script onto Html?";
const Answer21 = "<script/><script/>";
const Answer22 = "<script><script>";
const Answer23 = "<script><script/>"; //right one
const Answer24 = "</script><script/>";
const Question3 = "3. This symbol is used as an AND for conditionals";
const Answer31 = "&&"; //right one
const Answer32 = "??";
const Answer33 = "!!";
const Answer34 = "==";
const Question4 = "4. This symbol assigns a value to a variable";
const Answer41 = ":";
const Answer42 = "==";
const Answer43 = "==="; 
const Answer44 = "="; //right one
var timeEl = document.querySelector("#clock");

// Function to start the clock, change page, present question 1

function startTest() {
    startTimer();
}
// Countdown function

function startTimer() {
    var secondsLeft = 15;
    // Sets interval in variable
    var timerInterval = setInterval(function() {
    
        timeEl.textContent = secondsLeft + " seconds left ";
        secondsLeft--;
        if(secondsLeft === -1) {
        // Stops execution of action at set interval
            clearInterval(timerInterval);
            gameEnds();
        }

        }, 1000);
}

Questions1();

function Questions1(){
    document.getElementById("Q1").textContent = Question1;
    document.getElementById("A11").textContent = Answer11;
    document.getElementById("A12").textContent = Answer12;
    document.getElementById("A13").textContent = Answer13;
    document.getElementById("A14").textContent = Answer14;
}

Questions2();

function Questions2(){
    document.getElementById("Q2").textContent = Question2;
    document.getElementById("A21").textContent = Answer21;
    document.getElementById("A22").textContent = Answer22;
    document.getElementById("A23").textContent = Answer23;
    document.getElementById("A24").textContent = Answer24;
}
Questions3();

function Questions3(){
    document.getElementById("Q3").textContent = Question3;
    document.getElementById("A31").textContent = Answer31;
    document.getElementById("A32").textContent = Answer32;
    document.getElementById("A33").textContent = Answer33;
    document.getElementById("A34").textContent = Answer34;
}
Questions4();

function Questions4(){
    document.getElementById("Q4").textContent = Question4;
    document.getElementById("A41").textContent = Answer41;
    document.getElementById("A42").textContent = Answer42;
    document.getElementById("A43").textContent = Answer43;
    document.getElementById("A44").textContent = Answer44;
}


// Function to kill the game if timer runs out
function gameEnds() {
    alert("Test ends!");
    // add page to record their initials and save their score;
}


// find a way to save into local storage