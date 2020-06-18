// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowercaseLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var uppercaseLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var numbers = [1,2,3,4,5,6,7,8,9,0]
var specChar = ["!","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","]","^","_","`","{","|","}","~"]

var total = "";
var finalTest = [];
var passDraft = [];
var userEntry; 
var passLength;
var lowercase = {
  letter : function () {
      var num = lowercaseLetters[Math.floor(Math.random() * lowercaseLetters.length)];
      finalTest.push(num);
  },
  isNeeded: true,
}

var uppercase = {
letter : function () {
    var num = uppercaseLetters[Math.floor(Math.random() * uppercaseLetters.length)];
    finalTest.push(num);
},
  isNeeded: true,
}

var numeric = {
number : function () {
var num = numbers[Math.floor(Math.random() * numbers.length)];
finalTest.push(num);
},
isNeeded : true, 
}

var special = {
char : function (){
    var num = specChar[Math.floor(Math.random() * specChar.length)];
      finalTest.push(num);
  },
  isNeeded : true,
}

var criteriaNeeded = 0;

// Write password to the #password input
function writePassword() {
console.log("test");

  var password = generatePassword();
  // var password = "test"
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  function generatePassword() {
    console.log("test2");

    // informs user that criteria is coming up
    alert("Please enter password criteria on the subsequent screens");

    // password length selection
while(isNaN(passLength) || passLength < 8 || passLength > 128) {
    passLength = parseInt(prompt("Your password must be 8 - 128 characters in length.  How many characters would you like your password to be (please enter a number from 8 - 128)?")); 
}

// tells us which criteria is needed
do {
  alert("Please select from the following criteria (you must select at least one).")
  lowercase.isNeeded = confirm("Include lowercase letters?");
  uppercase.isNeeded = confirm("Include uppercase letters?");
  numeric.isNeeded = confirm("Include numbers?");
  specChar.isNeeded = confirm("Include special characters?");
  
  }
  // user must choose at least one criteria 
  while(lowercase.isNeeded === false && uppercase.isNeeded === false && numeric.isNeeded === false && specChar.isNeeded === false);

  if(lowercase.isNeeded === true && uppercase.isNeeded === true && numeric.isNeeded === true && specChar.isNeeded === true){
    criteriaNeeded = 4;
}

else if(lowercase.isNeeded === false && uppercase.isNeeded === true && numeric.isNeeded === true && specChar.isNeeded === true){
    criteriaNeeded = 3;
}

else if(lowercase.isNeeded === true && uppercase.isNeeded === false && numeric.isNeeded === true && specChar.isNeeded === true){
    criteriaNeeded = 3;
}

else if(lowercase.isNeeded === true && uppercase.isNeeded === true && numeric.isNeeded === false && specChar.isNeeded === true){
    criteriaNeeded = 3;
}

else if(lowercase.isNeeded === true && uppercase.isNeeded === true && numeric.isNeeded === true && specChar.isNeeded === false){
    criteriaNeeded = 3;
}

else if(lowercase.isNeeded === false && uppercase.isNeeded === false && numeric.isNeeded === true && specChar.isNeeded === true){
    criteriaNeeded = 2;
}

else if(lowercase.isNeeded === true && uppercase.isNeeded === false && numeric.isNeeded === false && specChar.isNeeded === true){
    criteriaNeeded = 2;
}

else if(lowercase.isNeeded === true && uppercase.isNeeded === true && numeric.isNeeded === false && specChar.isNeeded === false){
    criteriaNeeded = 2;
}

else if(lowercase.isNeeded === false && uppercase.isNeeded === true && numeric.isNeeded === false && specChar.isNeeded === true){
    criteriaNeeded = 2;
}

else if(lowercase.isNeeded === true && uppercase.isNeeded === false && numeric.isNeeded === true && specChar.isNeeded === false){
    criteriaNeeded = 2;
}

else if(lowercase.isNeeded === false && uppercase.isNeeded === true && numeric.isNeeded === true && specChar.isNeeded === false){
    criteriaNeeded = 2;
}

else if(lowercase.isNeeded === false && uppercase.isNeeded === false && numeric.isNeeded === false && specChar.isNeeded === true){
    criteriaNeeded = 1;
}

else if(lowercase.isNeeded === true && uppercase.isNeeded === false && numeric.isNeeded === false && specChar.isNeeded === false){
    criteriaNeeded = 1;
}

else if(lowercase.isNeeded === false && uppercase.isNeeded === true && numeric.isNeeded === false && specChar.isNeeded === false){
    criteriaNeeded = 1;
}

else if(lowercase.isNeeded === false && uppercase.isNeeded === false && numeric.isNeeded === true && specChar.isNeeded === false){
    criteriaNeeded = 1;
}

console.log(criteriaNeeded);

for (var i = 0; i < passLength; i++) {
    var num = Math.floor(Math.random() * criteriaNeeded) + 1;
    // var total = total + String(num);
    passDraft.push(num);
}



for (var i = 0; i < passLength; i++) {
  if (passDraft[i] === 1) {
      lowercase.letter();
  }
  else if (passDraft[i] === 2) {
      uppercase.letter();
  }
  else if (passDraft[i] === 3) {
      numeric.number();
  }
  else if (passDraft[i] === 4) {
      special.char();
  }

}
// gen
}
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





console.log(passDraft);

console.log("----------------");