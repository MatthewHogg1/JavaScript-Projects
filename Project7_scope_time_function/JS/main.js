var X = 1-; //global variable
function Add_numbers_1() {
    var x = 99; //local variable
    document.write(10 + X +"<br>"); //using local variable
}

function Add_numbers_2() {
    document.write(X+11); //using global variable
    console.log(x); //console.log to debug variable via browser
}

//If statement
function get_Date() {
    if (new Date().getHours() < 18){
        document.getElementById("Greeting").innerHTML = "How are you today?";
    }
}

//Else statement
function Age_Function() {
    Age = document.getElementById("Age").value;
    if (Age>=18) {
        Vote = "You are old enough to vote!";
    }
    else {
        Vote = "You are not old enough to vote!";
    }
    document.getElementById("How_old_are_you").innerHTML = Vote;
}

//Else + if statement
function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time< 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time>=12 == Time < 18) {
        Reply = "it is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}