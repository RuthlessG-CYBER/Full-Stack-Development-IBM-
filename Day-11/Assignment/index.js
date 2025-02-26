//Problem-1

const student = { 
    name: "Avijit Ghoshal", 
    rollNumber: 64, 
    marks: { 
        Math: 80, 
        Science: 65, 
        English: 50, 
        History: 70 
    }, 
    getAverageMarks: function() { 
        const totalMarks = Object.values(this.marks).reduce((sum, mark) => sum + mark, 0);
        const numberOfSubjects = Object.keys(this.marks).length;
        return totalMarks / numberOfSubjects;
    }, 
    checkPassOrFail: function() { 
        const averageMarks = this.getAverageMarks();
        return averageMarks >= 50 ? "Passed" : "Failed";
    } 
}; 
 
console.log(student.getAverageMarks());  
console.log(student.checkPassOrFail());  


//Problem-2

const library = { 
    books: { 
        "Atomic Habits": { author: "James Clear", availableCopies: 3 }, 
        "The Alchemist": { author: "Paulo Coelho", availableCopies: 5 }, 
    }, 
    borrowBook: function(bookName) { 
        if (this.books[bookName].availableCopies > 0) {
            this.books[bookName].availableCopies -= 1;
            console.log(`You have borrowed "${bookName}".`);
        } else {
            console.log(`Sorry, "${bookName}" is currently unavailable.`);
        }
    }, 
    returnBook: function(bookName) { 
        this.books[bookName].availableCopies += 1;
        console.log(`You have returned "${bookName}".`);
    } 
}; 
library.borrowBook("Atomic Habits");
console.log(library.books["Atomic Habits"].availableCopies);


//Problem-3

function generateTable(num, limit) {
    for (let i = 1; i <= limit; i++) {
        console.log(`${num} x ${i} = ${num * i}`);
    }
}

//problem-4

let num = 20;
if(num%3==0 && num%5!=0){
    console.log("Fizz");
}
if (num%3!=0 && num%5==0){
    console.log("Buzz");
}
if(num%3==0 && num%5==0){
    console.log("Fizz Buzz")
}

//Problem-5

function reverseString(str) {
    let reversed = ""; 
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i]; 
    }
    return reversed;
}

//Problem-6

function removeDuplicates(arr) {
    let uniqueArr = []; 
    for (let i = 0; i < arr.length; i++) {
        if (!uniqueArr.includes(arr[i])) {
            uniqueArr.push(arr[i]);
        }
    }
    return uniqueArr;
}

//Problem-7

function longestWord(sentence) {
    const words = sentence.split(' ');
    let longest = '';
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longest.length) {
            longest = words[i];
        }
    }
    return longest;
}

//Problem-8

function myMap(arr, callback) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i], i, arr));
    }
    return result;
}

//Problem-9

function firstUniqueCharacter(str) {
    const frequency = {};
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        frequency[char] = (frequency[char] || 0) + 1;
    }

    for (let i = 0; i < str.length; i++) {
        if (frequency[str[i]] === 1) {
            return str[i];
        }
    }
    return null;
}

//Problem-10

function findPairs(arr, target) {
    let pairs = []; 
    let visited = new Set();  

    for (let i = 0; i < arr.length; i++) {
        let complement = target - arr[i]; 
        if (visited.has(complement)) {
            pairs.push([complement, arr[i]]);
        }
        visited.add(arr[i]);
    }

    return pairs;
}