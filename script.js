// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("div.card-body textarea");

  passwordText.value= password;

}

function generatePassword(){
  var finalPassword = "fgdfgftf"

    return finalPassword
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
