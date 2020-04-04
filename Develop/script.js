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


// USER PICKING WHICH CRITERIA TO INCLUDE IN IN PASSWORD
whilie(picking===true){
  // ASK USER FOR CRITERA
  critChoice=prompt("What criteria would you like to inclue?/n special characters, numbers, uppercase, lowercase/n Enter one at a time and hit cancel when done");
  // IF NOT IN INDEX OF POSSIBLE CHOICES ASK AGAIN ELSE PUSH ONTO 
  if(criteria.indexOf(critChoice)===-1){
    critChoice=prompt("I'm sorry this choice was invalid, please try again.(special characters, numbers, uppercase, lowercase)");
  }
  if(criteria.indexOf(critChoice)>=0){
    pickedCriteria.push(critChoice);
  }
  if(critChoice=false){
    picking=false;
  }
  {

  }
}


// DECLARING VARIABLES
var criteria=["length", "special characters", "numbers", "uppercase", "lowercase"]
var pickedCrtieria=[];
var numbers= "0123456789"
var letters=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var pickedChars;
var passLength;



// FUNCTION TO GET PASSWORD LENGTH FROM USER
function promptLength() {
  passLength=parseInt(prompt("How many characters will the password be betweenn 8 and 128?"));
}

// FUNCTION TO GET SPECIAL CHARACTERS FROM USER
function promptChars() {
 pickedChars=prompt("What characters would you like to include?");
}

// for the requested password length, push the last characters on 
for(var i=0; i<passLength,i++;) {
  finalPass.push()
}


// User clicks button
// Prompt the length of password and save it to the variable passLength 
// ask which characters together no spaces and save it to variable pickedChars
// ask what criteria would like to be included and add it to the pickedCriteria through prompts until cancel
// generatePassword returns the finalPass
// writePassword changes the page to display the password created in Generate Password