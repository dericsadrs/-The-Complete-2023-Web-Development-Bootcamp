//Twitter String Counter

var maxCharacters = 300;
var tweet = prompt('Write your tweet');
//console.log(typeof(tweet) + tweet)
var numberOfCharacters = tweet.length
var numberOfCharatersRemaining = maxCharacters - numberOfCharacters;

alert('Number of words written: +' + numberOfCharacters + "Remaining words:" + numberOfCharatersRemaining  );



// Capitalize 
var name = prompt("What is your name");
var firsCharacter = name.slice(0,1).toUpperCase();
var restOfname = name.slice(1,name.length);
var concatonateName = firsCharacter + restOfname;

console.log("first char" + firsCharacter);
console.log("rest of name " + restOfname);
console.log(concatonateName);


