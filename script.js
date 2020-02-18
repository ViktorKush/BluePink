// returns true if palindrom
function palindrome(str) {
    return str.toLowerCase().split('').filter(char => (char !== " " && char !== "," && char !== "'")).join("") === str.toLowerCase()
        .split('')
        .filter(char => (char !== " " && char !== "," && char !== "'"))
        .reverse()
        .join('');
}
console.log(palindrome("Anna"), palindrome("дед"), palindrome("Madam, I'm Adam"));



const arr = [1,2,3];

const arr2 = arr;

arr2[0] = 8


console.log(arr);


let str = "Kate is fucking awesome";

const str2 = str;

str = "Cake";

console.log(str);






const doubleIt = arg => arg * 2;

const arr = [1,2,3];

const doubleIt2 = doubleIt;

const doubledArr = arr.map(doubleIt);

console.log(doubledArr);

