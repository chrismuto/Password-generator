var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = "";
  var passwordText = document.querySelector("#password");
  
  // sets the range of characters that can be selected for use in password
  var key_strings = {
    lowercase: 'abcdefghijklmnopqrstuvwxyz',
    uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    number: '0123456789',
    symbol: "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~",
  };

  // Sets the length of the password
  var length = window.prompt("Select a password length between 8 and 128 characters");
  while (length > 128 || length < 8 || isNaN(length)) {
    alert("Please select a valid length");
    length = window.prompt("Select a password length between 8 and 128 characters");
  }

  // sets the variable that will contain all the allowed characters
  var passwordCharSet = "";

  // Confirm selection of characters
  var lowercase = window.confirm("Would you like to use lowercase letters?");

  //select lowercase
  if (lowercase) {
    passwordCharSet += key_strings.lowercase;
  };

  //select uppercase
  var uppercase = window.confirm("Would you like to use uppercase letters?");

  if (uppercase) {
    passwordCharSet += key_strings.uppercase;
  }

  //select numbers
  var number = window.confirm("Would you like to use numbers?");

  if (number) {
    passwordCharSet += key_strings.number;
  }

  //select symbols
  var symbol = window.confirm("Would you like to use special characters?");

  if (symbol) {
    passwordCharSet += key_strings.symbol;
  }

  //checks whether any boxes were selected, if not length will equal 0
  if (passwordCharSet.length === 0) {
    alert("Please select at least one option");
    writePassword();
  }

  // Randomly selects a character from the list of characters allowed by user one at a time until the password reaches the desired length
    for (let i = 0; i < length; i++) {
      password += passwordCharSet[Math.floor(Math.random() * passwordCharSet.length)]
    }
    
    passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);