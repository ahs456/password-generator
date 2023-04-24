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
passwordLength = window.prompt("How many CHARACTERS do you want your password to contain?");

//second window alert (if password is out of password limits)
if (passwordLength < 8 || passwordLength > 128) {
  window.alert("Password MUST be between 8-128 characters, please try again");
  return null;
}
//window alert (if password if less that 8 characters)
if (passwordLength < 8) {
  window.alert("Password MUST have a minimum length of 8 characters or more, please try again");
  return null;
}
//window alert (if password is more than 128 characters)
if (passwordLength > 128) {
  window.alert ("Password MUST have a maximum length of 128 characters or less, please try again");
  return null;
}

//user confirms password criteria
confirmSpecialCharacters = window.confirm("By clicking 'OK' special characters with be included");
confirmUppCased = window.confirm("By clicking 'OK' upper cased characters will be included");
confirmLowCased = window.confirm("By clicking 'OK' lower cased characters will be included");
confirmNumbers = window.confirm("By clicking 'OK' numbered characters will be included");


}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
