document.write("10" + 5); //an expression combiing string and number

document.write(typeof "Word");

document.write(typeof 3);

function my_function() {
    document.getElementById("Test").innerHTML = 2/2;
}

document.getElementById("Test").innerHTML = isNaN('This is a string'); //Not a Number true

document.getElementById("Test").innerHTML - isNaN('007'); //Not a Number false

document.write(10>2);

document.write(10<2);

console.log(2 + 2) ; //console log test

document.write(10 == 10);

document.write(3 == 11); //utilising the ==

X = 10;
Y = 10;
document.write(X===Y);

X = 82;
Y = "82";
document.write(X === Y);

X = "Matt";
Y = 10;
document.write(X === Y); //utlising the ===

X = 10;
Y = 11;
document.write(X === Y);

document.write(5 > 2 && 5 > 3); // && AND logic

document.write(5 > 10 || 10 > 20); // || OR logic

function not_Function() {
    document.getElementById("Not").innerHTML = !(20>10); // ! Not function
}

function not_Function() {
    document.getElementById("Not").innerHTML = !(5>10); // ! Not function double negative
}