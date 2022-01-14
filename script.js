// The button is supposed to generate a prompt, enter whatever value that that prompt is asking for
// Then another prompt is generated until you get an answer for each upper, lower, length, etc. 
// After completing the final prompt, the password will generate

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//Prompt for password criteria and generate password
function generatePassword() {
  var alphaLower = "abcdefghijklmnopqrstuvwxyz".split(''); 
  var alphaUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
  var numbers = "0123456789".split('');
  var symbols = "!@#$%^&*_-+=".split('');
  var passwordOptions = [];  //array to store all charcters user selected for password

  var length = prompt ("Choose a password length between 8 & 128 chacters"); //prompt for desidered length

    if ((length <= 128) && (length >= 8)) { //Confirm password length requested is 8-128 charcters long
      console.log("good length")
    
      //Confirm charcter type to include in password
      var charCount = confirm ("Would you like to use numerical characters?");
      var special = confirm ("Would you like to use special charcters?");
      var upperCase = confirm ("Would you like to use upper-case letters?");
      var lowerCase = confirm ("Would you like to use lower-case letters?");


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
      if (charCount === false && special === false && upperCase === false && lowerCase === false) {
        return ("Password Generation failed! At least 1 charcter type needs to be selected.")
      }

      // Test: Ouput of array after confirms are answered 
      // console.log(passwordOptions);

      var result = '';

      for ( var i = 0; i < length; i++ ) {
        var randomValue = passwordOptions[Math.floor(passwordOptions.length * Math.random())];
        result += randomValue;
        // Test: Output the randomValue selected
        // console.log(randomValue);
      }
      
      return result;
    }
    else {
      return ("Password Generation failed! Please choose a valid number of characters and try again.");
    }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);