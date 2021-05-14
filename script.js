// Assignment Code
var generateBtn = document.querySelector("#generate");  

let lowerCase=["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let upperCase=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let numberChoices=["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let SpecialCharacters=["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "[", "]", "{", "}", "|", ";", ":", "'", ",", ".", "/", "?", "<", ">"]

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword() {

  var useLowerCase = prompt("Do you want lowercase characters", "Y/N");
  var useUpperCase = prompt("Do you want uppercase characters", "Y/N");
  var useNumberChoices = prompt("Do you want numerical characters", "Y/N");
  var useSpecialCharacters = prompt("Do you want special characters", "Y/N");
  

  if (useLowerCase != "Y" && useUpperCase != "Y" && useNumberChoices != "Y" && useSpecialCharacters != "Y") {
   alert("Please select at least one character")
  }
  var passwordLength = prompt("How long do you want you password", "password must be larger then 8 and lower then 128");
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


