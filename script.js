// Assignment code here

// Global variables for choices of finalpassword. Split is to convert a string into an array.
var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("")
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
var specialCharacters = "!@#$%^&*,.?:;-=+<>(){}[]`".split("")
var numbers = "0123456789".split("")
var finalPassword = ""
 

function generatePassword() {
  
  // To prevent from resetting the password when it's not empty.
  if (finalPassword.length === 0) {
    finalPassword = ""
  }

// When user clicks on "generate password," reminder prompt for user to choose the size of the password.
  var theLengthOfPassword = prompt("Please enter your desirable password size between 8 to 128.")

  // When user clicks on cancel, it goes back to original window.
  if (theLengthOfPassword === null) {
    return ""
  }

  // Prompts for four different variable choices.
  if (isNaN(theLengthOfPassword) === false && theLengthOfPassword >= 8 && theLengthOfPassword <= 128) {
    var isLowerCase = confirm("Would you want to include lower case letters in your password?")

    var isUpperCase = confirm("Would you want to include upper case letters in your password?")

    var isSpecialCharacters = confirm("Would you want to include special characters in your password?")

    var isNumbers = confirm("Would you want to include numbers in your password?")

    // Generate password based on the choices of the user.
    for (let i = 0; i < theLengthOfPassword; i++) {

      if (isLowerCase && finalPassword.length < theLengthOfPassword) {
        var randomIndex = Math.random() * lowerCase.length
        randomIndex = Math.floor(randomIndex)

        finalPassword = finalPassword + lowerCase[randomIndex]

      }

      if (isUpperCase && finalPassword.length < theLengthOfPassword) {
        var randomIndex = Math.random() * upperCase.length
        randomIndex = Math.floor(randomIndex)

        finalPassword = finalPassword + upperCase[randomIndex]

      }

      if (isSpecialCharacters && finalPassword.length < theLengthOfPassword) {
        var randomIndex = Math.random() * specialCharacters.length
        randomIndex = Math.floor(randomIndex)

        finalPassword = finalPassword + specialCharacters[randomIndex]

      }

      if (isNumbers && finalPassword.length < theLengthOfPassword) {
        var randomIndex = Math.random() * numbers.length
        randomIndex = Math.floor(randomIndex)

        finalPassword = finalPassword + numbers[randomIndex]

      }
    }

    // When user did not choose any of the variable choices. It will start over.
    if (isLowerCase === false && isUpperCase === false && isSpecialCharacters === false && isNumbers === false) {
      alert("Invalid entry. Please choose at least one type from lowercase, upper case letter, special charater or number for your password.")

      generatePassword()

    }

  }

  // When user did not input correct size of the password.
  else {
    alert("Invalid input. Please enter a password size between 8 to 128.")

    generatePassword()
  }

 
  finalPassword = finalPassword.split("")

   // Break the pattern in order to have random and secure password.
  finalPassword = finalPassword.sort(function () {
    return Math.random() - 0.5
  })

  finalPassword = finalPassword.join("")

  return finalPassword
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  // It wipes out previous global variable password and start over.
  finalPassword = ""
  var password = generatePassword();
  var passwordText = document.querySelector("div.card-body textarea");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
