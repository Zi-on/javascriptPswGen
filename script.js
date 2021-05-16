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
// Created variables for my prompts and a empty string for my result
function generatePassword() {
  var useLowerCase = prompt("Do you want lowercase characters", "Y/N");
  var useUpperCase = prompt("Do you want uppercase characters", "Y/N");
  var useNumberChoices = prompt("Do you want numerical characters", "Y/N");
  var useSpecialCharacters = prompt("Do you want special characters", "Y/N");
  var result = "";
// made a condition that if no character is chosen a alert is given and you are re given the
  if (
    useLowerCase != "Y" &&
    useUpperCase != "Y" &&
    useNumberChoices != "Y" &&
    useSpecialCharacters != "Y"
  ) {
    alert("Please select at least one character");
    var useLowerCase = prompt("Do you want lowercase characters", "Y/N");
    var useUpperCase = prompt("Do you want uppercase characters", "Y/N");
    var useNumberChoices = prompt("Do you want numerical characters", "Y/N");
    var useSpecialCharacters = prompt("Do you want special characters", "Y/N");
  }
  // variable for password length prompt
  var passwordLength = prompt(
    "How long do you want you password",
    "must be between 8-128"
  );
// if password length is not within the parameters you are given a alert message
  if (passwordLength < 8) {
    alert("The number you entered is too short");
  } else if (passwordLength > 128) {
    alert("The number you entered is too long");
  }
// created my for loops that generates a random password based on characters u chose to include
  if (
    useLowerCase == "Y" &&
    useUpperCase == "Y" &&
    useNumberChoices == "Y" &&
    useSpecialCharacters == "Y"
  ) {
    charactersChosen = lowerCase.concat(
      upperCase,
      numberChoices,
      specialCharacters
    );
    var result = [];
    for (var i = 0; i < passwordLength; i++) {
      var randomChar =
        charactersChosen[Math.floor(Math.random() * charactersChosen.length)];
      result.push(randomChar);

      password = result.join("");

      console.log(password);
    }
    return password;
  }

  if (
    useLowerCase != "Y" &&
    useUpperCase == "Y" &&
    useNumberChoices == "Y" &&
    useSpecialCharacters == "Y"
  ) {
    charactersChosen = upperCase.concat(specialCharacters, numberChoices);
    var result = [];
    for (var i = 0; i < passwordLength; i++) {
      var randomChar =
        charactersChosen[Math.floor(Math.random() * charactersChosen.length)];
      result.push(randomChar);

      password = result.join("");

      console.log(password);
    }
    return password;
  }

  if (
    useLowerCase == "Y" &&
    useUpperCase != "Y" &&
    useNumberChoices == "Y" &&
    useSpecialCharacters == "Y"
  ) {
    charactersChosen = lowerCase.concat(numberChoices, specialCharacters);
    var result = [];
    for (var i = 0; i < passwordLength; i++) {
      var randomChar =
        charactersChosen[Math.floor(Math.random() * charactersChosen.length)];
      result.push(randomChar);

      password = result.join("");

      console.log(password);
    }
    return password;
  }

  if (
    useLowerCase == "Y" &&
    useUpperCase == "Y" &&
    useNumberChoices != "Y" &&
    useSpecialCharacters == "Y"
  ) {
    charactersChosen = lowerCase.concat(upperCase, specialCharacters);
    var result = [];
    for (var i = 0; i < passwordLength; i++) {
      var randomChar =
        charactersChosen[Math.floor(Math.random() * charactersChosen.length)];
      result.push(randomChar);

      password = result.join("");

      console.log(password);
    }
    return password;
  }

  if (
    useLowerCase == "Y" &&
    useUpperCase == "Y" &&
    useNumberChoices == "Y" &&
    useSpecialCharacters != "Y"
  ) {
    charactersChosen = lowerCase.concat(upperCase, numberChoices);
    var result = [];
    for (var i = 0; i < passwordLength; i++) {
      var randomChar =
        charactersChosen[Math.floor(Math.random() * charactersChosen.length)];
      result.push(randomChar);

      password = result.join("");

      console.log(password);
    }
    return password;
  }

  if (
    useLowerCase == "Y" &&
    useUpperCase == "Y" &&
    useNumberChoices != "Y" &&
    useSpecialCharacters != "Y"
  ) {
    charactersChosen = lowerCase.concat(upperCase);
    var result = [];
    for (var i = 0; i < passwordLength; i++) {
      var randomChar =
        charactersChosen[Math.floor(Math.random() * charactersChosen.length)];
      result.push(randomChar);

      password = result.join("");

      console.log(password);
    }
    return password;
  }

  if (
    useLowerCase == "Y" &&
    useUpperCase != "Y" &&
    useNumberChoices == "Y" &&
    useSpecialCharacters != "Y"
  ) {
    charactersChosen = lowerCase.concat(numberChoices);
    var result = [];
    for (var i = 0; i < passwordLength; i++) {
      var randomChar =
        charactersChosen[Math.floor(Math.random() * charactersChosen.length)];
      result.push(randomChar);

      password = result.join("");

      console.log(password);
    }
    return password;
  }

  if (
    useLowerCase == "Y" &&
    useUpperCase != "Y" &&
    useNumberChoices != "Y" &&
    useSpecialCharacters == "Y"
  ) {
    charactersChosen = lowerCase.concat(specialCharacters);
    var result = [];
    for (var i = 0; i < passwordLength; i++) {
      var randomChar =
        charactersChosen[Math.floor(Math.random() * charactersChosen.length)];
      result.push(randomChar);

      password = result.join("");

      console.log(password);
    }
    return password;
  }

  if (
    useLowerCase != "Y" &&
    useUpperCase == "Y" &&
    useNumberChoices == "Y" &&
    useSpecialCharacters != "Y"
  ) {
    charactersChosen = upperCase.concat(numberChoices);
    var result = [];
    for (var i = 0; i < passwordLength; i++) {
      var randomChar =
        charactersChosen[Math.floor(Math.random() * charactersChosen.length)];
      result.push(randomChar);

      password = result.join("");

      console.log(password);
    }
    return password;
  }

  if (
    useLowerCase != "Y" &&
    useUpperCase == "Y" &&
    useNumberChoices != "Y" &&
    useSpecialCharacters == "Y"
  ) {
    charactersChosen = upperCase.concat(specialCharacters);
    var result = [];
    for (var i = 0; i < passwordLength; i++) {
      var randomChar =
        charactersChosen[Math.floor(Math.random() * charactersChosen.length)];
      result.push(randomChar);

      password = result.join("");

      console.log(password);
    }
    return password;
  }

  if (
    useLowerCase != "Y" &&
    useUpperCase != "Y" &&
    useNumberChoices == "Y" &&
    useSpecialCharacters == "Y"
  ) {
    charactersChosen = numberChoices.concat(specialCharacters);
    var result = [];
    for (var i = 0; i < passwordLength; i++) {
      var randomChar =
        charactersChosen[Math.floor(Math.random() * charactersChosen.length)];
      result.push(randomChar);

      password = result.join("");

      console.log(password);
    }
    return password;
  }

  if (
    useLowerCase == "Y" &&
    useUpperCase != "Y" &&
    useNumberChoices != "Y" &&
    useSpecialCharacters != "Y"
  ) {
    var result = [];
    for (var i = 0; i < passwordLength; i++) {
      var randomChar = lowerCase[Math.floor(Math.random() * lowerCase.length)];
      result.push(randomChar);

      password = result.join("");

      console.log(password);
    }
    return password;
  }
  if (
    useLowerCase != "Y" &&
    useUpperCase == "Y" &&
    useNumberChoices != "Y" &&
    useSpecialCharacters != "Y"
  ) {
    var result = [];
    for (var i = 0; i < passwordLength; i++) {
      var randomChar = upperCase[Math.floor(Math.random() * upperCase.length)];
      result.push(randomChar);

      password = result.join("");

      console.log(password);
    }
    return password;
  }

  if (
    useLowerCase != "Y" &&
    useUpperCase != "Y" &&
    useNumberChoices == "Y" &&
    useSpecialCharacters != "Y"
  ) {
    var result = [];
    for (var i = 0; i < passwordLength; i++) {
      var randomChar =
        numberChoices[Math.floor(Math.random() * numberChoices.length)];
      result.push(randomChar);

      password = result.join("");

      console.log(password);
    }
    return password;
  }
  if (
    useLowerCase != "Y" &&
    useUpperCase != "Y" &&
    useNumberChoices != "Y" &&
    useSpecialCharacters == "Y"
  ) {
    var result = [];
    for (var i = 0; i < passwordLength; i++) {
      var randomChar =
        specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
      result.push(randomChar);

      password = result.join("");

      console.log(password);
    }
    return password;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


