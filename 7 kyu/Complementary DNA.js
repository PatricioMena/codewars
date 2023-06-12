// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

// P: String
// R: The same string but every letter changed to their complementary
// E: "ATTGC" --> "TAACG"

const DNAStrand = (dna) => {
  let pairs = { A: 'T', T: 'A', G: 'C', C: 'T' };
  return dna
    .split('')
    .map((el) => pairs[el])
    .join('');
};

DNAStrand('ATTGC');
