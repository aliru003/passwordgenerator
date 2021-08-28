var generateButton = document.getElementById("generate");

generateButton.addEventListener('click', generatePassword);

var lowerCase = "abcdefghjklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "1234567890";
var specialCharacters = "!@#$%^&*()_+-={}|[]:;<>?";
var userChoices = "";

function generatePassword() {
    
var passLength = parseInt(window.prompt("Please choose the amount of characters you would like in your password between 8-128."))
var littleLetters = window.confirm("Would you like lowercase letters in your password?");
var bigLetters = window.confirm("Would you like uppercase letters in your password?");
var nums = window.confirm("Would you like numbers in your password?");
var specialChar = window.confirm("Would you like special characters in your password?");

if(littleLetters === true){
    userChoices += lowerCase;   
}



if(bigLetters === true){
    userChoices += upperCase;   
}

console.log("USER CHOICES",userChoices)

console.log("PASSWORD LENGTH", passLength)
console.log("LITTLE LETTERS", littleLetters)
}

