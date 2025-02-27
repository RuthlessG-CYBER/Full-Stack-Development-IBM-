// For Each

// let arr = [1, 2, 3, "SVU", 4, 5, 6, 7, 8, 9, 10];
// arr.forEach((element, index) => {
//     console.log(element, index);
    // return arr[index] // In this return statemant is not working, because forEach is synchronous and returns undefined.
// });

// for (let i = 0; i < arr.length; i++) {   //For loop return the same result as forEach
//     console.log(arr[i], i);
// }

// Map
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// let output = arr.map((element, index) => {
//     return element ** 2;
// });

// console.log(output);

// Filter
// let arr = [1, 2, 3, 4,"Soumya", 6, 7, 8, 9, 10, 11, "Aiee", 14, 15];
// let output = arr.filter((element, index) => {
    // return element % 2 == 0;
//     return typeof element === `string`;
// });

// console.log(output);

// Reduce

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let output = arr.reduce((element, accumulator) => {
//     return accumulator + element;
// }, 0);

// console.log(output);

// Filter

// let arr = [1, 2, 3, 4,"Soumya", 6, 7, 8, 9, 10, 11, "Aiee", 14, 15];

// let output = arr.filter((element, index) => {
//     return typeof element !== `string` && element % 2 == 0;
// }).map((element, index)=>{
//     return element ** 2;
// }).reduce((element, accumulator) => {
//     return accumulator + element;
// })

// console.log(output);


// let arr = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];

// let output = arr.filter((element, index) => {
//     return element % 4 == 0;
// }).map((element, index)=>{
//     return element ** 2;
// })

// console.log(output);

// Sort

// let arr = [12, 444, 16, 8, 10, 2, 1, 164, 8, 20];
// let output = arr.sort((a, b) => {
//     return a - b; // Sort in descending order.
// })
// console.log(output);

// let output1 = arr.sort((a, b) => {
//     return b - a; // Sort in ascending order.
// })
// console.log(output1);


let data = [
    { carName: "BMW", Engine: "2.0", Year: 2020, rating: 9 },
    { carName: "Audi", Engine: "3.0", Year: 2015, rating: 8.8 },
    { carName: "Ford", Engine: "1.5", Year: 2018, rating: 9.1 },
    { carName: "Mercedes", Engine: "3.5", Year: 2021, rating: 9.0 },
    { carName: "Nano", Engine: "1.0", Year: 2025, rating: 8.5 },
]

let ans = data.sort((a, b) => {
    if (a.rating > b.rating) return -1;
    if (a.rating < b.rating) return 1;
})

console.log(ans);
