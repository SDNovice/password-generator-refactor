// Assignment Code
// Here are my arrays for the criteria
var specChac = ['/','!','@','#', '.', '?', '&','*','$',"-"];
var num = ['1','2','3','4','5','6','7','8','9','0']
var uCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
var lCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

// This is selects which element will be linked to the event selector
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

// This is our function that will transfer the 
// value from JS to the web page
function writePassword() {
  var criteria = passCriteria();
  var passwordText = document.querySelector("#password");
  if (criteria){
    var password = generatePassword();
    passwordText.value = password;
  }else{
    passwordText.value = ""
  }
}

//These are our functions.

// This one gives the user prompts and confirms to set 
// their desire criteria for their password
function passCriteria() {
  selectedCrit = [];
  
  charL = parseInt(prompt("Character Length?", 10));

  if(Number.isNaN(charL)) {
    alert('Has to be a number');
    return null;
  }

  if(charL < 8 || charL > 128){
    alert('Must be between 8 and 128 characters')
    return null;
  }

  if (confirm('Include Lowercase')){
    selectedCrit =  selectedCrit.concat(lCase);
  }

  if(confirm('Include Uppercase')){
    selectedCrit =  selectedCrit.concat(uCase);
    }

  if(confirm('Include Numerics')){
    selectedCrit =  selectedCrit.concat(num);
  }

  if(confirm('Include Special Characters')){
    selectedCrit =  selectedCrit.concat(specChac);
  }
  return true;
}

// This function takes the given prompts and confirms
// and uses them as paramenters and components for our for loop

//That info is then returned and sent to the write password function
function generatePassword(){
  var result = '';
  for ( var i = 0; i < charL; i++ ) {
      var select = Math.floor(Math.random() * selectedCrit.length);
      result += selectedCrit[select];
  }  
  return result;
}

// Add event listener to generate button

// This activates all of our functions.
generateBtn.addEventListener("click", writePassword);