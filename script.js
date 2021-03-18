// // Assignment Code
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");
//   "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"


//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);





// Generator Functions

// function getRandomLower() {
  //   return String.fromCharCode(97);
  
  // }
  
  // console.log(math.floor(math.random() * 26) + 97);
  
  
  let passwordLength=window.prompt("How many characters do you want your password to be? (It must be between 8-128 characters long)");
  
  let lowerCaseCharacters = [ "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  
  let upperCaseCharacters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
  
  let numberCharacters = [1,2,3,4,5,6,7,8,9,0] 
  
  let specialCharacters = ["!","@","#","$","%","&","?"]



passwordLength = parseInt(passwordLength);

if (isNaN(passwordLength) || 8 > passwordLength|| passwordLength > 128){
  alert("Invalid Input");
  return;
} else {
  alert(:"The number of characters is:" + passwordLength + ".")

}
let lowercase = confirm("Do you want to use lowercase letters?");
