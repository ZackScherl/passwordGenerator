// Get references to the #generate element

var generateBtn = document.querySelector("#generate");

// broke characters into categories in order to enable individual selection upon confirm prompt dialogue boxes
var numbersPass = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var lowercasePass = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppercasePass = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var symbolsPass = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')'];
var allChars = [];


// user clicks the button to generate a password and is presented with a series of prompts

function generatePassword() {

  let password = "";
  var passwordLength = prompt("Enter password length between 8 and 128")
  // Paul Keldson suggestion adding this log to button as a way to visibly confirm our code is working
  console.log("Hey! You clicked the button!");

  // when prompted for the length of the password, the user choice is given a parameter this code supplies the range
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Your password does not meet the critia. Password must be between 8 and 128 characters in length.");
    return;
    // Makes sure length meets criteria before moving to selection

  } else {

    // Use Confirm prompts to determine which characters user desires
    var passwordLowercase = confirm("Do you want to use Lowercase? Click 'OK' for Yes or 'Cancel' for No.")
    var passwordUppercase = confirm("Do you want to use Uppercase? Click 'OK' for Yes or 'Cancel' for No.")
    var passwordNumber = confirm("Do you want to use Numbers? Click 'OK' for Yes or 'Cancel' for No.")
    var passwordSymbol = confirm("Do you want to use Symbols? Click 'OK' for Yes or 'Cancel' for No.")

    // Validate input with if statements to determine which characters get appended into the allChars variable based on user's answers
  }
  
  if (passwordLowercase) { allChars.push(...lowercasePass)}
  if (passwordUppercase) { allChars.push(...uppercasePass)}
  if (passwordNumber) { allChars.push(...numbersPass)}
  if (passwordSymbol) { allChars.push(...symbolsPass)}


  //loop is created to repeat the function until the length determined by user is met
  for (var i = 0; i < passwordLength; i++) {
    var randomPass = Math.floor(Math.random() * Math.floor(allChars.length));
    password += allChars[randomPass];
  }

  return password
  
}

// generate password

function writePassword() {
  var password = generatePassword();
  document.getElementById("password").value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
