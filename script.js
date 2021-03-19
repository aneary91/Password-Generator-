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

let lowerCaseCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

let upperCaseCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

let numberCharacters = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

let specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  ",",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

function passwordPrompt() {
  let passwordLength = parseInt(
    prompt(
      "How many characters do you want your password to be? (It must be between 8-128 characters long)"
    )
  );

  if (isNaN(passwordLength) || 8 > passwordLength || passwordLength > 128) {
    alert("Invalid Input");
    return;
  } else {
    alert("The number of characters is:" + passwordLength + ".");
  }
  // use confirm to get boolean value to get lowercase characters.
  const lowercase = confirm("Do you want to use lowercase letters?");

  // use confirm to get boolean value to get lowercase characters.
  const uppercase = confirm("Do you want to use uppercase letters?");

  // use confirm to get boolean value to get lowercase characters.
  const numberChar = confirm("Do you want to use number?");

  // use confirm to get boolean value to get lowercase characters.
  const specialChar = confirm("Do you want to use special characters?");

  const passwordInput = {
    passwordLength: passwordLength,
    lowercase: lowercase,
    uppercase: uppercase,
    numberChar: numberChar,
    specialChar: specialChar,
  };

  // if is asking the user if they have used any of the following password ______ and if they have not then a message will pop up tellign them to include said characters.
  if (
    lowercase === false &&
    uppercase === false &&
    numberChar === false &&
    specialChar === false
  ) {
    alert("You must choose at least one character type.");
    return;
  }

  return passwordInput;
}

let passwordObject = passwordPrompt();
console.log(passwordObject);

let selectionArray = [];
if (passwordObject.lowercase) {
  selectionArray = selectionArray.concat(lowerCaseCharacters);
}
if (passwordObject.uppercase) {
  selectionArray = selectionArray.concat(upperCaseCharacters);
}

if (passwordObject.numberChar) {
  selectionArray = selectionArray.concat(numberCharacters);
}

if (passwordObject.specialChar) {
  selectionArray = selectionArray.concat(specialCharacters);
}

console.log(selectionArray);
