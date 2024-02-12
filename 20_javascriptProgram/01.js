//Queston-1--JavaScript Program to Check for Palindrome Number


function isPalindrome(num) {
     originalString = num.toString();
     reversedString = originalString.split('').reverse().join('');

    return originalString === reversedString;
}

 numberToCheck = 121;
if (isPalindrome(numberToCheck)) {
    console.log(`${numberToCheck} is a palindrome.`);
} else {
    console.log(`${numberToCheck} is not a palindrome.`);
}
