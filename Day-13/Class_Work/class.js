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

// let ans = data.sort((a, b) => {
//     if (a.rating > b.rating) return -1;
//     if (a.rating < b.rating) return 1;
// })

// let ans = data.sort((a, b) => a.carName.localeCompare(b.carName));

// console.log(ans);

// let l1 = [10, 2, 13, 22, 1, 65, 17, 8, 90, 1];

// for (let i = 0; i < l1.length; i++) {
//     for (let j = 0; j < l1.length+i; j++) {
//         if (l1[j] > l1[j + 1]) {  // if j is greater than j+1, swap them
//             let temp = l1[j];  // then store it into the temp
//             l1[j] = l1[j + 1];   // if both is equall then j+1 value will be stored into j 
//             l1[j + 1] = temp; // value stored into the temp
//         }
//     }
// }

// console.log(l1);



// function Sorting(li) {
//     for (let i = 0; i < li.length; i++) {
//         for ( let j = 0; j < li.length-i; j++){
//             if(li[j] > li[j+1]){
//                 let temp = li[j];
//                 li[j] = li[j+1];
//                 li[j+1] = temp;
//             }
//         }
//     }
//     return li;
// }

// let li = [10, 2, 13, 22, 1, 65, 17, 8, 90, 1];
// let sortedArray = Sorting(li);
// console.log(sortedArray);