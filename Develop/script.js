
// User clicks button
// Prompt the length of password and save it to the variable passLength 
// ask which characters together no spaces and save it to variable pickedChars
// confirmCriteria returns a boolean and if true include it in criteria generating password
// Math.random gives random decimals. 
// generatePassword returns the finalPass
// writePassword changes the page to display the password created in Generate Password






// DECLARING VARIABLES
var criteria=[numbersBool, charsBool, uppercaseBool, lowercaseBool];
var pickedCriteria=[];
var letters=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var pickedChars;
var passLength;
var uppercaseBool;
var lowercaseBool;
var charsBool;
var numbersBool;
var finalPass;


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
// FOR CHOSEN PASSWORD LENGTH, PICK RANDOM CRITERIA AND ADD 
function generatePassword(){
  var finalPass="";
  for(var i=0;i<passLength;i++){
    var criteria=randomCriteria();
    switch (criteria) {
      case "numbers":
      finalPass += randomDigit(10);
      break;
      
      case "lowercase":
      finalPass += randomLower();
      break;
      
      case "uppercase":
      finalPass += randomUpper();
      break;
      
      case "specialChars":
      finalPass += randomChar();
      break;
      
      default:
      break;
    }
  }
  return finalPass; 
}

// FUNCTION TO ASK YES OR NO TO CRITERIA
function confirmCriteria() {
  
  // TRUE OR FALSE LOWERCASE LETTERS. IF TRUE ADD TO PICKED CRITERA
  lowercaseBool=confirm("Would you like lowercase letters included?");
  if (lowercaseBool===true) {
    pickedCriteria.push("lowercase");
  }
  
  // TRUE OR FALSE UPPERCASE LETTERS. IF TRUE ADD TO PICKED CRITERA
  uppercaseBool=confirm("Would you like uppercase letters included");
  if (lowercaseBool===true) {
    pickedCriteria.push("uppercase");
  }
  
  // TRUE OR FALSE NUMBERS. IF TRUE ADD TO PICKED CRITERA
  numbersBool=confirm("Would you like numbers included?");
  if (numbersBool===true) {
    pickedCriteria.push("numbers");
  }
  
  // TRUE OR FALSE SPECIAL CHARACTERS. IF TRUE ADD TO PICKED CRITERA
  specialBool=confirm("Would you still like your special characters added?");
  if (specialBool===true) {
    pickedCriteria.push("specialChars");
  }
}

// FUNCTION TO GET PASSWORD LENGTH FROM USER
function promptLength() {
  passLength=parseInt(prompt("How many characters will the password be betweenn 8 and 128?"));
  alert("Password length set to: "+passLength+" characters");
  console.log(passLength);
}

// FUNCTION TO GET SPECIAL CHARACTERS FROM USER
function promptChars() {
  pickedChars=prompt("What characters would you like to include?");
  alert("Characters possibly included are: "+ pickedChars);
  console.log(pickedChars);
}

// GENERATE RANDOM UPPERCASE LETTER BY RANDOMLY CHOOSING A LETTER FROM THE ARRAY AND RETURNING THE UPPERCASE
function randomUpper(){
  var letter=letters[randomDigit(26)];
  var uppercase=letter.toUpperCase();
  return uppercase;
}

// GENERATE RANDOM LOWERCASE LETTER BY RANDOMLY CHOOSING A LETTER FROM THE ARRAY AND RETURNING THE LOWERCASE
function randomLower(){
  var letter=letters[randomDigit(26)];
  var lowercase=letter.toLowerCase();
  return lowercase;
}
// GENERATES A RANDOM NUMBER WITH MAX BEING THE INPUT
function randomDigit(x) {
  var rando=Math.floor(Math.random()*x);
  return rando;
}
// PICKS A RANDOM CRITERIA FROM THE USER PICKED LIST BY RANDOMLY GETTING A NUMBER AND USING IT AS AN INDEX
function randomCriteria() {
  var pickCritLen=pickedCriteria.length;
  return pickedCriteria[randomDigit(pickCritLen)-1];  
}

// PICKS A RANDOM SPECIAL CHARACTER FROM THE INPUT STRING
function randomChar() {
  var pickCharLen= pickedChars.length;
  return pickedChars.charAt(randomDigit(pickCharLen)-1);  
}



passLength=10;
var pickedChars="*&^%$#";
confirmCriteria();
console.log(pickedCriteria+":picked criteria");
writePassword();





