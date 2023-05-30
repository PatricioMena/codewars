// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

// Your task is to write a function maskify, which changes all but the last four characters into '#'

// P: Strings and numbers
// R: Last four digits and all # before
// E: maskify("4556364607935616") == "############5616"

const maskify = (cc) => {
  const last4Chars = cc.slice(-4);
  const maskedChars = last4Chars.padStart(cc.length, '#');
  return maskedChars;
};

maskify('4556364607935616');
