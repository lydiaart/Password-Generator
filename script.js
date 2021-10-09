// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least >= 8 characters and no more than 128 <= characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
//if all criteria is met, then start formulating the password according to the user's selection.

var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("")
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
var specialCharacters = "!@#$%^&*,.?:;-=+<>(){}[]`".split("")
var numbers = "0123456789".split("")

function generatePassword() {
  var finalPassword = ""
  /*
  step 1. Prompt the user the length of the password: Choose more than 8 characters, but no more than 128 characters.
  step 2. If the user accidently typed in letters instead of numbers, prompt "Invalid input, please type in numbers only."
  step 3. Restart the button for mistakes.
  step 4. If the user entered numbers only, confirm "Would you like to add lowercase letters?" with "Yes" or "No."
  step 5. If the user entered numbers and letters, confirm "Would you like to have special chacacters?" with "Yes" or "No."
  
  */
  var theLengthOfPassword = prompt("Please enter your desirable password size between 8 to 128.")
  console.log(theLengthOfPassword)
  if (theLengthOfPassword === null) {
    return ""
  }

  theLengthOfPassword = parseInt(theLengthOfPassword)
  if (Number.isInteger(theLengthOfPassword) && theLengthOfPassword >= 8 && theLengthOfPassword <= 128) {
    var isLowerCase = confirm("Would you want to include lower case letters in your password?")
    console.log(isLowerCase)

    if (isLowerCase) {
      
    }

    var isUpperCase = confirm("Would you want to include upper case letters in your password?")
    console.log(isUpperCase)

    if (isUpperCase) {
     
    }

    var isSpecialCharacters = confirm("Would you want to include special characters in your password?")
    console.log(isSpecialCharacters)

    if (isSpecialCharacters) {
      
    }

    var isNumbers = confirm("Would you want to include numbers in your password?")
    console.log(isNumbers)

    if (isNumbers) {
      
    }

    if (isLowerCase === false && isUpperCase === false && isSpecialCharacters === false && isNumbers === false) {
      alert("Invalid entry. Please choose at least one special charater or lowercase or upper case letter or number.")
    }
    
    generatePassword()

  }


  else {
    alert("Invalid input. Numbers only. 8-128.")
    generatePassword()
  }



  return finalPassword
}








// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("div.card-body textarea");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
