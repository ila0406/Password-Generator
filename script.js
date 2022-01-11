// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Thet button is supposed to generate a prompt, enter whatever value that that prompt is asking for, then another prompt is generated until you get an answer for each upper, lower, length, etc. then after completing the final prompt thats when the password will generate
function generatePassword() {
  var alphaLower = "abcdefghijklmnopqrstuvwxyz".split(''); 
  var alphaUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
  var numbers = "0123456789".split('');
  var symbols = "!@#$%^&*_-+=".split('');
  var passwordOptions = [];  //array to store all charcters user selected for password
  var length = prompt ("How many charcters do you need the password to be?");
  var charCount = confirm ("Would you like to use numerical characters?");
  var special = confirm ("Would you like to use special charcters?");
  var upperCase = confirm ("Would you like to use upper-case letters?");
  var lowerCase = confirm ("Would you like to use lower-case letters?");
  var result = '';

  if (charCount === true) {
    passwordOptions = passwordOptions.concat(numbers);
  }
  if (special === true) {
    passwordOptions = passwordOptions.concat(symbols);
  }
  if (upperCase === true) {
    passwordOptions = passwordOptions.concat(alphaUpper);
  }
  if (lowerCase === true) {
    passwordOptions = passwordOptions.concat(alphaLower);
  }

  // Test: Ouput of array after confirms are answered 
  // console.log(passwordOptions);

  for ( var i = 0; i < length; i++ ) {
    var randomValue = passwordOptions[Math.floor(passwordOptions.length * Math.random())];
    result += randomValue;
    // Test: Output the randomValue selected
    // console.log(randomValue);
  }
   
  return result;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// GIVEN I need a new, secure password

// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria

// WHEN prompted for password criteria
// THEN I select which criteria to include in the password

// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters

// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters

// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected

// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria

// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page