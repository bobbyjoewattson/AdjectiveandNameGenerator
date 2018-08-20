//Create an array of adjectives
var adjective = [
"Naive",
"Impetuos",
"Nice"
];
//Ask the user for his or her name
var name = prompt("What is your name?");
//Create a random number
var choose =(Math.floor(Math.random() * adjective.length));
//tell the user that he or she "is" followed by the adjective
window.alert(name + " " + adjective[choose]);