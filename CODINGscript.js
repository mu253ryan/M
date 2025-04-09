/* Write a program that prints the numbers from 1 to 100. For multiples of 3, print "Fizz"; for
multiples of 5, print "Buzz"; and for numbers that are multiples of both 3 and 5, print
"FizzBuzz"*/
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

// Write a program to generate the Fibonacci sequence up to 100.

let a = 0, b = 1;
console.log(a); 
console.log(b); 

while (true) {
    let next = a + b;
    if (next > 100) break;
    console.log(next);
    a = b;
    b = next;
}

//Write a program that takes an integer as input and returns true if the input is a power of two.
function isPowerOfTwo(n) {
    if (n <= 0) return false;

    while (n > 1) {
        if (n % 2 !== 0) return false;
        n = n / 2;
    }

    return true;
}

/*Write a program that accepts a string as input, capitalizes the first letter of each word in the
string, and then returns the result string.*/
function capitalizeWords(str) {
    let words = str.split(' ');
    
    let capitalized = words.map(word => {
        if (word.length === 0) return word; 
        return word[0].toUpperCase() + word.slice(1).toLowerCase();
    });
    
    return capitalized.join(' ');
}

/*Write a program that takes an integer as input and returns an integer with reversed digit
ordering.*/
function reverseDigits(num) {
    const isNegative = num < 0;
    let absNum = Math.abs(num);
    let reversed = 0;
    
    while (absNum > 0) {
        let digit = absNum % 10;
        reversed = reversed * 10 + digit;
        absNum = Math.floor(absNum / 10);
    }
    return isNegative ? -reversed : reversed;
}
//Write a program that counts the number of vowels in a sentence.
function countVowels(sentence) {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let count = 0;

    for (let char of sentence) {
        if (vowels.includes(char)) {
            count++;
        }
    }

    return count;
}



