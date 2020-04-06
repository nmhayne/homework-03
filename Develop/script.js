// DECLARING VARIABLES
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
  while(finalPass.length<passLength){
    var criteria=randomCriteria();
    switch (criteria) {
      case "numbers":
      finalPass += randomDigit(10);
      break;
      case "specialChars":
      finalPass += randomChar();
      break;
      case "lowercase":
      finalPass += randomLetter();
      break;
      case "uppercase":
      finalPass += randomLetter().toUpperCase();
      break;
      
    }
  }
  return finalPass; 
}

// FUNCTION TO ASK YES OR NO TO CRITERIA
function confirmCriteria() { 
  // TRUE OR FALSE NUMBERS. IF TRUE ADD TO PICKED CRITERA
  numbersBool=confirm("Would you like numbers included?");
  if (numbersBool===true) {
    pickedCriteria.push("numbers");
  }
  
  // TRUE OR FALSE SPECIAL CHARACTERS. IF TRUE ADD TO PICKED CRITERA
  charsBool=confirm("Would you still like your special characters added?");
  if (charsBool===true) {
    pickedCriteria.push("specialChars");
  }
  
  // TRUE OR FALSE LOWERCASE LETTERS. IF TRUE ADD TO PICKED CRITERA
  lowercaseBool=confirm("Would you like lowercase letters included?");
  if (lowercaseBool===true) {
    pickedCriteria.push("lowercase");    
  }
  
  // TRUE OR FALSE LOWERCASE LETTERS. IF TRUE ADD TO PICKED CRITERA
  uppercaseBool=confirm("Would you like uppercase letters included?");
  if (uppercaseBool===true) {
    pickedCriteria.push("uppercase");    
  }
  alert(pickedCriteria+": picked criteria")
}

// GET PASSWORD LENGTH FROM USER
function promptLength() {
  passLength=parseInt(prompt("How many characters will the password be between 8 and 128?"));
  if (passLength<8 || passLength>128) {
    alert("I'm sorry please try again. Choose a number between 8 and 128");
    passLength=parseInt(prompt("How many characters will the password be between 8 and 128?"));
  }
  alert("Password length set to: "+passLength+" characters");
  console.log(passLength);
}
// GET SPECIAL CHARACTERS FROM USER
function promptChars() {
  pickedChars=prompt("What characters would you like to include?");
  alert("Characters possibly included are: "+ pickedChars);
  console.log(pickedChars);
}
// GET RANDOM LETTER
function randomLetter(){
  var letter=letters[randomDigit(26)];
  return letter;
}
// GENERATES A RANDOM NUMBER WITH MAX BEING THE INPUT
function randomDigit(x) {
  var rando=Math.floor(Math.random()*x);
  return rando;
}
// PICKS A RANDOM CRITERIA FROM THE USERS LIST
function randomCriteria() {
  var pickCritLen=pickedCriteria.length;
  return pickedCriteria[randomDigit(pickCritLen)];  
}
// PICKS A RANDOM SPECIAL CHARACTER FROM THE INPUT STRING
function randomChar() { 
  var pickCharLen= pickedChars.length;
  return pickedChars.charAt(randomDigit(pickCharLen)-1);  
}



// RUN FINAL 
promptLength();
promptChars();
confirmCriteria();
writePassword();




