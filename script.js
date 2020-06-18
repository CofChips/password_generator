
var lowercaseLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var uppercaseLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var numbers = [1,2,3,4,5,6,7,8,9,0]
var specChar = ["!","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","]","^","_","`","{","|","}","~"]

var finalPassword = [];
var passDraft = [];
var passLength;

// functions added to each criteria object to randomly generate values and add to final password
var lowercase = {
  letter : function () {
            var num = lowercaseLetters[Math.floor(Math.random() * lowercaseLetters.length)];
            finalPassword += num;
            },
  isNeeded: true,
}

var uppercase = {
letter : function () {
        var num = uppercaseLetters[Math.floor(Math.random() * uppercaseLetters.length)];
        finalPassword += num;
        },
isNeeded: true,
}

var numeric = {
number : function () {
        var num = numbers[Math.floor(Math.random() * numbers.length)];
        finalPassword += num;
        },
isNeeded : true, 
}

var special = {
char : function (){
      var num = specChar[Math.floor(Math.random() * specChar.length)];
      finalPassword +=num;
      },
isNeeded : true,
}

// this function is triggered when the user clicks on the button (in HTML)
  function generatePassword(){
    
    alert("Please enter password criteria on the subsequent screens");
    // cannot proceed until user meets criteria
    while(isNaN(passLength) || passLength < 8 || passLength > 128) {
      passLength = parseInt(prompt("Your password must be 8 - 128 characters in length.  How many characters would you like your password to be (please enter a number from 8 - 128)?")); 
    }
  
    console.log("number of characters: " + passLength);

    do {
      alert("Please select from the following criteria (you must select at least one).")
      lowercase.isNeeded = confirm("Include lowercase letters?");
      uppercase.isNeeded = confirm("Include uppercase letters?");
      numeric.isNeeded = confirm("Include numbers?");
      specChar.isNeeded = confirm("Include special characters?");
      
      }
      // user must choose at least one criteria 
      while(lowercase.isNeeded === false && uppercase.isNeeded === false && numeric.isNeeded === false && specChar.isNeeded === false);

      console.log("Need LC? " + lowercase.isNeeded);
      console.log("Need UC? " + uppercase.isNeeded);
      console.log("Need #? " + numeric.isNeeded);
      console.log("Need SC? " + specChar.isNeeded);

      // identifies the number of criteria the user has selected
      var need = lowercase.isNeeded+uppercase.isNeeded+numeric.isNeeded+specChar.isNeeded;
      
      console.log("Number of criteria to include: " + need);
      
      // generates a random set of numbers at the desired length with each numerical value limited to the number of criteria selected
      for (var i = 0; i < passLength; i++) {
        var num = Math.floor(Math.random() * need) + 1;
        passDraft.push(num);
        }

      console.log("Num: " + num);

      console.log("First cut: " + passDraft);

      // for each possible combination of variables, determines which random function needs to generate a character 
      if(lowercase.isNeeded === true && uppercase.isNeeded === true && numeric.isNeeded === true && specChar.isNeeded === true){
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
      }
      else if(lowercase.isNeeded === false && uppercase.isNeeded === true && numeric.isNeeded === true && specChar.isNeeded === true){
        for (var i = 0; i < passLength; i++) { 
        if (passDraft[i] === 1) {
            uppercase.letter();
        }
        else if (passDraft[i] === 2) {
            numeric.number();
        }
        else if (passDraft[i] === 3) {
            special.char();
        }
      }
      }
      else if(lowercase.isNeeded === true && uppercase.isNeeded === false && numeric.isNeeded === true && specChar.isNeeded === true){
        for (var i = 0; i < passLength; i++) {
        if (passDraft[i] === 1) {
            lowercase.letter();
        }
        else if (passDraft[i] === 2) {
            numeric.number();
        }
        else if (passDraft[i] === 3) {
            special.char();
        }
      }
      }
      else if(lowercase.isNeeded === true && uppercase.isNeeded === true && numeric.isNeeded === false && specChar.isNeeded === true){
        for (var i = 0; i < passLength; i++) {
        if (passDraft[i] === 1) {
            lowercase.letter();
        }
        else if (passDraft[i] === 2) {
            uppercase.letter();
        }
        else if (passDraft[i] === 3) {
            special.char();
        }
      }
      }
      else if(lowercase.isNeeded === true && uppercase.isNeeded === true && numeric.isNeeded === true && specChar.isNeeded === false){
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
      }
      }
      else if(lowercase.isNeeded === false && uppercase.isNeeded === false && numeric.isNeeded === true && specChar.isNeeded === true){
        for (var i = 0; i < passLength; i++) {
        if (passDraft[i] === 1) {
            numeric.number();
        }
        else if (passDraft[i] === 2) {
            special.char();
        }
      }
      }
      else if(lowercase.isNeeded === true && uppercase.isNeeded === false && numeric.isNeeded === false && specChar.isNeeded === true){
        for (var i = 0; i < passLength; i++) {
        if (passDraft[i] === 1) {
            lowercase.letter();
        }
        else if (passDraft[i] === 2) {
            special.char();
        }}
      }
      else if(lowercase.isNeeded === true && uppercase.isNeeded === true && numeric.isNeeded === false && specChar.isNeeded === false){
        for (var i = 0; i < passLength; i++) {
        if (passDraft[i] === 1) {
            lowercase.letter();
        }
        else if (passDraft[i] === 2) {
            uppercase.letter();
        }
      }
      }
      else if(lowercase.isNeeded === false && uppercase.isNeeded === true && numeric.isNeeded === false && specChar.isNeeded === true){
        for (var i = 0; i < passLength; i++) {
        if (passDraft[i] === 1) {
            uppercase.letter();
        }
        else if (passDraft[i] === 2) {
            special.char();
        }
      }
      }
      else if(lowercase.isNeeded === true && uppercase.isNeeded === false && numeric.isNeeded === true && specChar.isNeeded === false){
        for (var i = 0; i < passLength; i++) {
        if (passDraft[i] === 1) {
            lowercase.letter();
        }
        else if (passDraft[i] === 2) {
            numeric.number();
        }
      }
      }
      else if(lowercase.isNeeded === false && uppercase.isNeeded === true && numeric.isNeeded === true && specChar.isNeeded === false){
        for (var i = 0; i < passLength; i++) {
        if (passDraft[i] === 1) {
            uppercase.letter();
        }
        else if (passDraft[i] === 2) {
            numeric.number();
        }}
      }
      else if(lowercase.isNeeded === false && uppercase.isNeeded === false && numeric.isNeeded === false && specChar.isNeeded === true){
        for (var i = 0; i < passLength; i++) {
        if (passDraft[i] === 1) {
            special.char();
        }}
      }
      else if(lowercase.isNeeded === true && uppercase.isNeeded === false && numeric.isNeeded === false && specChar.isNeeded === false){
        for (var i = 0; i < passLength; i++) {
        if (passDraft[i] === 1) {
            lowercase.letter();
        }
      }
      }
      else if(lowercase.isNeeded === false && uppercase.isNeeded === true && numeric.isNeeded === false && specChar.isNeeded === false){
        for (var i = 0; i < passLength; i++) {
        if (passDraft[i] === 1) {
            uppercase.letter();
        }
      }
      }
      else if(lowercase.isNeeded === false && uppercase.isNeeded === false && numeric.isNeeded === true && specChar.isNeeded === false){
        for (var i = 0; i < passLength; i++) {
        if (passDraft[i] === 1) {
            numeric.number();
        }
      }
    }
      console.log("Password: " + finalPassword)
    // sends the result over to be displayed on the screen
    document.getElementById("password").innerHTML = finalPassword;
    
    // resets values

    finalPassword = null;
    console.log("reset: " + finalPassword)
    passLength = null;
    console.log("reset: " + passLength)
    passDraft = null;
    console.log("reset: " + passDraft)
    passDraft = [];
    finalPassword = [];
  }

