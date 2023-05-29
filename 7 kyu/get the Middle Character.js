// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

// P: String
// R: If odd middle character, if even 2 middle character
// E: getMiddle("test") => "es", getMiddle("testing") => "t", getMiddle("tested") => "st"

const getMiddle = (s) => {
  let stringSize = s.length;
  let middleIndex = Math.floor(stringSize / 2);

  if (stringSize % 2 !== 0) {
    return s[middleIndex];
  } else if (stringSize % 2 === 0) {
    return s.slice(middleIndex - 1, middleIndex + 1);
  }
};

getMiddle('test');
getMiddle('testing');
getMiddle('tested');
