// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button LINE 28
generateBtn.addEventListener("click", writePassword);


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


function generatePassword(){
  return finalPass;
}



var criteria=["length", "special characters", "numbers", "uppercase", "lowercase"]
var numbers= "0123456789"
var letters=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var pickedChars;

function promptLength() {
  passLength=parseInt(prompt("How many characters will the password be betweenn 8 and 128?"));
}
function promptChars() {
 pickedChars=prompt("What characters would you like to include?");
}

// for the requested password length, push the last characters on 
// for(var i=0; i<passLength,i++;) {
//   finalPass.push()
// }
promptLength();
promptChars();
console.log(passLength);
console.log(pickedChars);

// User clicks button
// Prompt the length of password and save it to the variable passLength 
// ask which characters together no spaces and save it to variable pickedChars
// 