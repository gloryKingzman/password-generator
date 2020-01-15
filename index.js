const characterAmountRange = document.querySelector("input[type=range]");
const characterAmountNumber = document.querySelector("input[type=number]");
const includeUpperCaseBox = document.querySelector("input[name=UpperCase]");
const includeNumberBox = document.querySelector("input[name=Number]");
const includeSymbolBox = document.querySelector("input[name=Symbol]");
const passwordDisplay = document.querySelector(".passwordDisplay");
const submitButton = document.querySelector("button[type=submit]");
////
///CHARCODES
const lowerCaseCharacter = getCharCode(97, 122);
const upperCaseCharacter = getCharCode(65, 90);
const numberCharacter = getCharCode(48, 57);
const symbolCharacter = getCharCode(35, 43).concat(getCharCode(59, 64)); //did not select all symbols
//console.table(lowerCaseCharacter);

///////////
function syncValue(e) {
	const value = e.target.value;
	//sync the values of the raange and number input
	characterAmountRange.value = value;
	characterAmountNumber.value = value;
	// passwordDisplay.innerText = value;
}

////////////

function getCharCode(start, end) {
	const characterCodeArr = [];
	for (let i = start; i <= end; i++) {
		//console.log(i);
		characterCodeArr.push(i);
	}
	return characterCodeArr;
}
//////////

function generatePassword(
	characterAmount,
	includeNumber,
	includeSymbol,
	includeUpperCase
) {
	let PasswordCharacter = lowerCaseCharacter;

	if (includeNumber) {
		PasswordCharacter = PasswordCharacter.concat(numberCharacter);
	}
	if (includeSymbol) {
		PasswordCharacter = PasswordCharacter.concat(symbolCharacter);
	}
	if (includeUpperCase) {
		PasswordCharacter = PasswordCharacter.concat(upperCaseCharacter);
	}

	const generatedCharacters = [];

	///loop over generate randomly
	let i = 0;
	while (i < characterAmount) {
		//generate randomly
		i++;
		console.log(i);
		const randomCharacters =
			PasswordCharacter[
				Math.floor(Math.random() * PasswordCharacter.length)
			];

		generatedCharacters.push(String.fromCharCode(randomCharacters));
	}
	// for (let i in characterAmount) {
	// 	console.log(i);
	// 	const randomCharacters =
	// 		PasswordCharacter[
	// 			Math.floor(Math.random() * PasswordCharacter.length)
	// 		];

	// 	generatedCharacters.push(String.fromCharCode(randomCharacters));
	// 	i++;
	// }
	return generatedCharacters.join("");
}

//////////////

function submitForm(e) {
	e.preventDefault(); //prevent page refresh when form is submitted

	const characterAmount = characterAmountNumber.value;

	//returns true if the checkbox is checked
	const includeNumber = includeNumberBox.checked;
	const includeUpperCase = includeUpperCaseBox.checked;
	const includeSymbol = includeSymbolBox.checked;
	//////

	const finalpassword = generatePassword(
		characterAmount,
		includeNumber,
		includeSymbol,
		includeUpperCase
	);
	//////

	//display generated password
	passwordDisplay.innerText = finalpassword;
}
characterAmountNumber.addEventListener("input", syncValue);
characterAmountRange.addEventListener("input", syncValue);
submitButton.addEventListener("click", submitForm);
//includeUpperCaseBox.addEventListener("click", () => console.log("hey"));
