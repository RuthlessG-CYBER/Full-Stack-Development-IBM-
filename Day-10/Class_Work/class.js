let str = "SV University"

console.log(str.length)

console.log(str[-1])

str[0]="R"
console.log(str)

let arr = [1, 2, 3, "Soumya", 1, 2, true, false, null, undefined]
console.log(arr[3])
console.log(arr)

arr[3] = "Chacha"
console.log(arr)

console.log(arr[arr.length-1])

arr.push("Hi")
console.log(arr)

arr.pop()
console.log(arr)

// slice search on mdn H/W

// Object

// Object Literal
// new key word
// constractor

let svuClass = ["Soumya", "B-Tech", 3, "Panda", "B-Tech", 3]

const obj = {
    "Soumya":{class:"B-Tech",year:3,subjects:["DBMS","IBM"],1:"SVU"},
    "Panda":{class:"B-Tech",year:3,subjects:["DBMS","IBM","RM"]}
}
console.log(obj.Soumya)
console.log(obj.Soumya.subjects[0])

obj["1"] = "Hi"

delete obj.Panda["year"]

delete obj["Soumya"]
console.log(obj)

obj.Virat = {cricket:"BCCI",match:200,player:["Best","Good", "Excellent"]}

obj.Virat = {cricket:"ICC",match:500,player:["Best","Good", "Excellent"]}

console.log(obj)

let name = "Somu"
let Class = "BCCI"
let sub = "RS"

const newObj ={name, Class, sub} 
console.log(newObj)