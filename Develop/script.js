// DECLARING VARIABLES
var criteria=[numbers, letters, special]
var pickedCrtieria=[];
var numbers= "0123456789"
var letters=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var pickedChars;
var passLength;



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
  finalPass="Testnothignsomethign please"
  return finalPass; 
}


// USER PICKING WHICH CRITERIA TO INCLUDE IN IN PASSWORD
// function promptCriteria() {
//   while (picking===true) { 
//     // ASK USER FOR CRITERA
//     critChoice=prompt("What criteria would you like to inclue? special characters, numbers, uppercase, lowercase/n Enter one at a time and hit cancel when done");
//     console.log(critChoice);
//     // IF NOT IN INDEX OF POSSIBLE CHOICES ASK AGAIN ELSE PUSH ONTO 
//     if(critChoice===null ||critChoice ===""){
//       picking=false;
//       break;
//     }
//     if (criteria.indexOf(critChoice)===-1){
//       alert("I'm sorry this choice was invalid, please try again.(special characters, numbers, uppercase, lowercase)");
//     }
//     if (criteria.indexOf(critChoice)>=0 && pickedCrtieria.indexOf(critChoice)!==-1){
//       alert("This criteria is already included.")
//     }
//     if (criteria.indexOf(critChoice)>=0 && pickedCrtieria.indexOf(critChoice)===-1){
//       pickedCrtieria.push(critChoice);
//       alert(critChoice+" has been added to included criteria.");
//     }
//   }
// }

function confirmCriteria() {
  lowercaseBool=confirm("Would you like lowercase letters included?");
  uppercaseBool=confirm("Would you like uppercase letters included");
  numbersBool=confirm("Would you like numbers included?");
  specialBool=confirm("Would you still like your special characters added?");
  
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


promptCriteria();
// User clicks button
// Prompt the length of password and save it to the variable passLength 
// ask which characters together no spaces and save it to variable pickedChars
// confirmCriteria returns a boolean and if true include in
// generatePassword returns the finalPass
// writePassword changes the page to display the password created in Generate Password





// for the requested password length, push the last characters on 
for(var i=0; i<passLength,i++;) {
  for(var j=0; j<passLength,j++;){
        
  }
}