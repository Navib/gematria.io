const reverse = arr => {
  for (let i = 0, j = arr.length - 1; i < j; i++, j--)
    [arr[i], arr[j]] = [arr[j], arr[i]];

  return arr;
};

export const englishOrdinal = (letter, LETTERS) => {
  let total = 0;
  let i = 0;
  let currentLetter = letter.toLowerCase();
  let findIndex;
  const newLetters = LETTERS.slice(0);

  if (letter === '' || !letter) {
    total = 0;
    return total;
  }

  while (i < currentLetter.length) {
    findIndex = newLetters.indexOf(currentLetter[i]) + 1;
    total += findIndex;
    i++;
  }

  return total;
};

export const reverseOrdinal = (letter, LETTERS) => {
  let total = 0;
  let i = 0;
  let currentLetter = letter.toLowerCase();
  let findIndex;
  const newLetters = reverse(LETTERS.slice(0));

  if (letter === '' || !letter) {
    total = 0;
    return total;
  }

  while (i < currentLetter.length) {
    findIndex = newLetters.indexOf(currentLetter[i]) + 1;
    total += findIndex;
    i++;
  }

  return total;
};

export const singleReduction = (letter, LETTERS) => {
  let total = 0;
  let i = 0;
  let currentLetter = letter.toLowerCase();
  let findIndex;

  while (i < currentLetter.length) {
    const newLetters = LETTERS.slice(0);
    if (
      newLetters.indexOf(currentLetter[i]) >= 8 &&
      newLetters.indexOf(currentLetter[i]) <= 18
    ) {
      findIndex = newLetters
        .splice(8, newLetters.length)
        .indexOf(currentLetter[i]);
    } else if (newLetters.indexOf(currentLetter[i]) > 18) {
      findIndex =
        newLetters.splice(18, newLetters.length).indexOf(currentLetter[i]) + 1;
    } else if (newLetters.indexOf(currentLetter[i]) < 8) {
      findIndex = newLetters.indexOf(currentLetter[i]) + 1;
    }

    total += findIndex;
    i++;
  }

  return total;
};
