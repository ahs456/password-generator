// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

//Generating password criteria
function generatePassword() {
  const lowerCasedCharacters = "abcdefghijklmnopqrstuvwxyz";
  const upperCasedCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const special = "!@£$%^&*()'+,-./:;<=>?[]\_`{}|~#";

//initialising password criteria to baseline
var length = 0;
var passwordNumbers = false;
var passwordSpecial = false;
var passwordLowCased = false;
var passwordUppCased = false;

//first window promt (number of characters)
length = window.prompt("How many CHARACTERS do you want your password to contain?");

//second window promt (if password is out of password limits)
if (length < 8 && length > 128) {
  window.alert("Password MUST be between 8-128 characters, please try again");
  return;
}


}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
