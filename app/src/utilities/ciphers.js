//reverseLetters
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

  if (letter === '' || !letter) {
    total = 0;
    return total;
  }

  while (i < currentLetter.length) {
    findIndex = LETTERS.indexOf(currentLetter[i]) + 1;
    total += findIndex;
    i++;
  }

  return total;
};

export const fullReduction = (letter, LETTERS) => {
  let total = 0;
  let i = 0;
  let currentLetter = letter.toLowerCase();
  let findIndex;
  let indexToString;
  let addNum;

  if (letter === '' || !letter) {
    total = 0;
    return total;
  }

  while (i < currentLetter.length) {
    findIndex = LETTERS.indexOf(currentLetter[i]) + 1;
    indexToString = findIndex.toString();

    if (indexToString.length === 2) {
      addNum =
        parseInt(indexToString.charAt(0), 10) +
        parseInt(indexToString.charAt(1), 10);

      if (addNum >= 10) {
        addNum =
          parseInt(addNum.toString().charAt(0), 10) +
          parseInt(addNum.toString().charAt(1), 10);
      }
      total += addNum;
    } else {
      total += findIndex;
    }
    i++;
  }

  return total;
};

export const reverseFullReduction = (letter, LETTERS) => {
  let total = 0;
  let i = 0;
  let currentLetter = letter.toLowerCase();
  let findIndex;
  let indexToString;
  let addNum;
  const newLetters = reverse(LETTERS);

  if (letter === '' || !letter) {
    total = 0;
    return total;
  }

  while (i < currentLetter.length) {
    findIndex = newLetters.indexOf(currentLetter[i]) + 1;
    indexToString = findIndex.toString();

    if (indexToString.length === 2) {
      addNum =
        parseInt(indexToString.charAt(0), 10) +
        parseInt(indexToString.charAt(1), 10);

      if (addNum >= 10) {
        addNum =
          parseInt(addNum.toString().charAt(0), 10) +
          parseInt(addNum.toString().charAt(1), 10);
      }
      total += addNum;
    } else {
      total += findIndex;
    }
    i++;
  }

  return total;
};
