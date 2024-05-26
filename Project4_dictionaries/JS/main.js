function my_Dictionary() {
    var House = {
        Type: "Detatched",
        Bedrooms: 3,
        Garden: "Large",
        Price: 200,000,
    };
    delete House.Garden; //This remove the house kvp from the dictionary before it is displayed
    document.getElementById("Dictionary") .innerHTML = House.Price;
}