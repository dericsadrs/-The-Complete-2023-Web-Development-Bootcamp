var myArrayOfNames = ["Deric", "Erika", "Shy", "Eleandro"];
var guessName = prompt("What is your name?");

if (myArrayOfNames.includes(guessName)) {
    console.log("Welcome");
} else {
    console.log("Sorry, you're not in the list");
}
