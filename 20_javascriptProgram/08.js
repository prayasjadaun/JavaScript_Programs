//Question-8--JavaScript Program to Check Vowel or Consonant (use if-else loop)

function checkVowelOrConsonant(character) {
    const vowels = 'aeiouAEIOU';

    if (vowels.includes(character)) {
        return 'Vowel';
    } else {
        return 'Consonant';
    }
}


const charToCheck = 'a';
const result = checkVowelOrConsonant(charToCheck);

console.log(`${charToCheck} is a ${result}`);
