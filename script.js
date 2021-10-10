// Assignment code here

var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("")
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
var specialCharacters = "!@#$%^&*,.?:;-=+<>(){}[]`".split("")
var numbers = "0123456789".split("")

function generatePassword() {
  var finalPassword = ""

  var theLengthOfPassword = prompt("Please enter your desirable password size between 8 to 128.")
  console.log(theLengthOfPassword)

  if (theLengthOfPassword === null) {
    return ""
  }

  if (isNaN(theLengthOfPassword)===false && theLengthOfPassword >= 8 && theLengthOfPassword <= 128) {
    var isLowerCase = confirm("Would you want to include lower case letters in your password?")

    var isUpperCase = confirm("Would you want to include upper case letters in your password?")

    var isSpecialCharacters = confirm("Would you want to include special characters in your password?")

    var isNumbers = confirm("Would you want to include numbers in your password?")

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

    if (isLowerCase === false && isUpperCase === false && isSpecialCharacters === false && isNumbers === false) {
      alert("Invalid entry. Please choose at least one special charater or lowercase or upper case letter or number.")

    generatePassword()
    }
  }

  else {
    alert("Invalid input. Please enter a password size between 8 to 128.")
    generatePassword()
  }

  return finalPassword
}

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
