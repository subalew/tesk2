// Ex1: 

const num = 123; // המספר לבדיקה

// חישוב מספר המחלקים והדפסת התוצאה
const result = ((num % 2 === 0) + (num % 3 === 0) + (num % 5 ===0));
console.log(result); 

//Ex2:

// פונקציה לבדיקה אם מספר הוא ראשוני
function isPrime(num) {
    if (num < 2) return false; 
    for (let i = 2; i <= Math.sqrt(num); i++) { 
        if (num % i === 0)
           return false; 
      }
    return true; 
}

// הדפסת כל המספרים הראשוניים הקטנים מ-237

let count = 0;
 for (let i = 2; i < 237; i++) {
    if (isPrime(i)) {
     count ++;
        console.log(i); 
    }   
}
 console.log(`All prime numbers is: ${ count}`)


 //Ex3:

 // הגדרת מערך של מספרים שלמים
const numbers = [0, 1, 2, 0, 5, 0, 3, 0, 7];

// חישוב כמות האפסים במערך באמצעות foreach והדפסה 
let zeroCount = 0;
numbers.forEach(num => zeroCount += (num === 0 ? 1 : 0));
console.log(`The number of zeros in the array is: ${zeroCount}`);
