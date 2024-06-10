//ternary operation with input from the browser
function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

//Coding Assignment with THIS and NEW keywords
function Vehicle(Make, Model, Year, Colour) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Colour = Colour;
}
//keyword results display
var Jack = new Vehicle ("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle ("Jeep", "Trail", 2019, "White and Black");
var Erik = new Vehicle ("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML =
    "Erik drives a " + Erik.Vehicle_Colour + "-coloured " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}

//Nested Function:
function Nested_Function() {
    document.getElementById("Counting").innerHTML = Count ();
    function Count () {
        var Starting_point = 9;
        function Plus_one() {Starting_point += 1;}
        Plus_one ();
        return Starting_point;
    }
}