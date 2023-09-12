var name = prompt("Enter the names in this format: (Deric, Erika, Eleandro, Shy): ");
names = name.split(",");

console.log(names);

function buyLunch(names) {
    var randomIndex = Math.floor(Math.random() * names.length); // Generate a random index within the array's bounds
    var selectedName = names[randomIndex]; // Get the selected name

    return selectedName + " is going to pay for the bill today!";
}

var result = buyLunch(names);
console.log(result); // Print the result
