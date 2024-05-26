function addition() { //Defining and naming the addition function
    var add = 5 + 2;
    document.getElementByID("Add") .innerHTML = "5 + 2 = " + add; //Print the result in HTML
}

function subtraction() { //Defining and naming the subtraction function
    var add = 5 - 2;
    document.getElementByID("Sub") .innerHTML = "5 - 2 = " + sub; //Print the result in HTML
}

function multiplication() { //Defining and naming the multiplication function
    var add = 5 * 2;
    document.getElementByID("Mlt") .innerHTML = "5 * 2 = " + mult; //Print the result in HTML
}

function division() { //Defining and naming the division function
    var add = 5 / 2;
    document.getElementByID("Div") .innerHTML = "5 / 2 = " + divide; //Print the result in HTML
}

function random() { //Defining and naming the random function
    document.getElementByID("Ran") .innerHTML = math.random()*10; //Print the result in HTML
}

function modulus() { //Defining and naming the modulus operator function
    var modulus = 5 % 2;
    document.getElementByID("Mod") .innerHTML = 
    "When you divide 5 by 2 you have a remainder of: " + modulus; //Print the result in HTML
}

function increment() { //Defining and naming the increment function
    var value = document.getElementByID("IncrementText") .innerHTML; //Saves the text of the HTML element to a variable

    value++; //Add one to the value

    document.getElementByID("IncrementText").innerHTML = value; //Print the result in HTML
}

function decrement() { //Defining and naming the decrement function
    var value = document.getElementByID("DecrementText") .innerHTML; //Saves the text of the HTML element to a variable

    value--; //Subtract one from the value

    document.getElementByID("DecrementText").innerHTML = value; //Print the result in HTML
}