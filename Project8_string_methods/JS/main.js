//Concatenate method
function full_sentence() {
    var part_1 = "I have ";
    var part_2 = "made this ";
    var part_3 = "into a complete ";
    var part_4 = "sentence.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

//slice() method - gives inters 27 to 33 Johnny when click on the button in browser
function slice_method() {
    var Sentence = "All work and no play makes Johnny a dull boy.";
    var Section = Sentence.slice(27,33);
    document.getElementById("Slice").innerHTML = Section;
}

//number method - returns a number as a string
function string_method() {
    var X = 182;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}

//toPrecision Method - formats a number to a specified length
function precision_method() {
    var X = 12938.3012987376112;
    document.getElementById("Precision").innerHTML = X.toPrecision(10);
}