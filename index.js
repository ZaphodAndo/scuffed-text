let converter = (input) => {
  let uppercase = true;
  let convertedString = "";

  for (let i = 0; i < input.length; i++) {
    let character = input.charAt(i);

    if (uppercase === true) {
      character = character.toUpperCase();
      convertedString = convertedString + character;
      uppercase = false;
    } else {
      character = character.toLowerCase();
      convertedString = convertedString + character;
      uppercase = true;
    }

    if (convertedString.length === input.length) {
      return convertedString;
    }
  }
};

export default converter;
