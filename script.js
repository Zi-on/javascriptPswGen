// Assignment Code
var generateBtn = document.querySelector("#generate");  
// Created array of all character choices
let lowerCase=["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let upperCase=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let numberChoices=["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let specialCharacters=["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "[", "]", "{", "}", "|", ";", ":", "'", ",", ".", "/", "?", "<", ">"]
let passwordText = [""]
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
  var result = ""
  

  if (useLowerCase != "Y" && useUpperCase != "Y" && useNumberChoices != "Y" && useSpecialCharacters != "Y") {
   alert("Please select at least one character");
    var useLowerCase = prompt("Do you want lowercase characters", "Y/N");
    var useUpperCase = prompt("Do you want uppercase characters", "Y/N");
    var useNumberChoices = prompt("Do you want numerical characters", "Y/N");
    var useSpecialCharacters = prompt("Do you want special characters", "Y/N");
  }
  var passwordLength = (prompt("How long do you want you password", "password must be larger then 8 and lower then 128"));

  if (passwordLength < 8) {
    alert("The number you entered is too short") }
  else if (passwordLength > 128) {
    alert("The number you entered is too long")
  }
  
  if (useLowerCase == "Y" && useUpperCase == "Y" && useNumberChoices == "Y" && useSpecialCharacters == "Y"){
    charactersChosen = lowerCase.concat(upperCase, numberChoices, specialCharacters);
  for (var i = 0; i < passwordLength; i++) {
    var result = []
    var allChoices = charactersChosen[Math.floor(Math.random()*charactersChosen.length)];
    allChoices.concat()
    
    console.log(result);
  }
    
    return ;
  
    
      
  
    
    
  
  
  }
  
  if (useLowerCase != "Y" && useUpperCase == "Y" && useNumberChoices == "Y" && useSpecialCharacters == "Y"){
    charactersChosen = upperCase.concat(specialCharacters, numberChoices);
  for (var i = 0; i < passwordLength; i++) {
      password = charactersChosen[Math.floor(Math.random()*charactersChosen.length)]
      console.log(password)}
  }
  
  if (useLowerCase == "Y" && useUpperCase != "Y" && useNumberChoices == "Y" && useSpecialCharacters == "Y"){
    charactersChosen = lowerCase.concat(numberChoices, specialCharacters);
    for (var i = 0; i < passwordLength; i++) {
      password = charactersChosen[Math.floor(Math.random()*charactersChosen.length)]
      console.log(password)}
  }

  if (useLowerCase == "Y" && useUpperCase == "Y" && useNumberChoices != "Y" && useSpecialCharacters == "Y"){
    charactersChosen = lowerCase.concat(upperCase, specialCharacters);
    for (var i = 0; i < passwordLength; i++) {
      password = charactersChosen[Math.floor(Math.random()*charactersChosen.length)]
      console.log(password)}
  }

  if (useLowerCase == "Y" && useUpperCase == "Y" && useNumberChoices == "Y" && useSpecialCharacters != "Y"){
    charactersChosen = lowerCase.concat(upperCase, numberChoices);
    for (var i = 0; i < passwordLength; i++) {
      password = charactersChosen[Math.floor(Math.random()*charactersChosen.length)]
      console.log(password)}
  }
  }
  





// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


