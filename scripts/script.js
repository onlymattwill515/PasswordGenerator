// Array of Uppercase Character options
const upperCasedCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
// Array of Lowercase Character options
const lowerCasedCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
// Array of Numeric Character Options
const numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
// Array of Special Character Options
const specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];


// userInput Function declaration
userInput = () => {
  let desiredPasswordLength = prompt("How many characters do you want your password to be?");
  if (desiredPasswordLength >= 8 && desiredPasswordLength <= 128) {
    let hasNumericCharacters = confirm("Do you want numbers in your password?");
    let hasUpperCasedCharacters = confirm("Do you want upper cased letters?");
    let hasLowerCasedCharacters = confirm("Do you want lower cased letters?");
    let hasSpecialCharacters = confirm("Do you want special characters?");
    //Object to hold all user preferences
    let userPreferencesObject = {
      length: desiredPasswordLength,
      'Includes Numbers': hasNumericCharacters,
      'Includes Uppercased': hasUpperCasedCharacters,
      'Includes Lowercased': hasLowerCasedCharacters,
      'Includes Special Characters': hasSpecialCharacters
    };
    return userPreferencesObject;
    // Edge Cases for if a user does not respond to the password length prompt correctly
  } else if (desiredPasswordLength < 8) {
    alert("Must be minimum of 8 characters!");
    return;
  } else if (desiredPasswordLength > 128) {
    alert("Must be less than 128 characters!");
    return;
  } else {
    alert("Must provide a number!");
    return;
  };
};


// generatePassword Function Delclaration
function generatePassword() {
  // Calls/Executes the userInput Function
  let userPreferences = userInput();
  // Array to store all of the potential password characters, based on the users preference selection
  let potentialPasswordCharactersArray = [];
  // Array to store all of the final characters used for the password to be selected from the potential characters array
  let finalPasswordCharactersArray = [];
  // Adds the Numeric characters array contents to the potentialPasswordCharactersArray if Truthy / Present in the Preference Object
  if (userPreferences['Includes Numbers']) {
    potentialPasswordCharactersArray = potentialPasswordCharactersArray.concat(numericCharacters);
  };
  // Adds the Uppercase characters array contents to the potentialPasswordCharactersArray if Truthy / Present in the Preference Object
  if (userPreferences['Includes Uppercased']) {
    potentialPasswordCharactersArray = potentialPasswordCharactersArray.concat(upperCasedCharacters);
  };
  // Adds the Lowercase characters array contents to the potentialPasswordCharactersArray if Truthy / Present in the Preference Object
  if (userPreferences['Includes Lowercased']) {
    potentialPasswordCharactersArray = potentialPasswordCharactersArray.concat(lowerCasedCharacters);
  };
  // Adds the special characters array contents to the potentialPasswordCharactersArray if Truthy / Present in the Preference Object
  if (userPreferences['Includes Special Characters']) {
    potentialPasswordCharactersArray = potentialPasswordCharactersArray.concat(specialCharacters);
  };
  // Loop used select random elements from the potentialPasswordCharactersArray & then store them in the finalPasswordCharactersArray
  for (let i = 0; i < userPreferences.length; i++) {
    finalPasswordCharactersArray[i] = potentialPasswordCharactersArray[Math.floor(Math.random() * potentialPasswordCharactersArray.length)];
  };

  //Function to change an Array to a String, so that it displays as a string to the User
  function changeArrayToString(arrayString) {
    var finalString = ""
    for (let i = 0; i < arrayString.length; i++) {
      finalString += arrayString[i]
    }
    return finalString
  }

  // Execute Function that changes Array to a String, and Returns the final result
  let finalPassword = changeArrayToString(finalPasswordCharactersArray);
  return finalPassword;

};


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;


};
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




