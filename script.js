// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  function generatePassword() {
    return "test";
  }
  alert("Please enter password criteria on the subsequent screens")
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz"
var updercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numbers = [1,2,3,4,5,6,7,8,9,0]
var specChar = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"

var total = "";
var passDraft = [];
var userEntry; 
var passLength;
var lowercase = {
      letter : [],
      isNeeded: true,
}

var uppercase = {
      letter : [],
      isNeeded: true,
}

var numeric = {
      number : [],
      isNeeded : true, 
}