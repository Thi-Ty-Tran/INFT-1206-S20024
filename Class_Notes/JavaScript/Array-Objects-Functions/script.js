// console.log("Script is running...")

// -------------Objects------------------
// let car = {
//     type: "Supercar", // type => KEY, Supercar => VALUE
//     brand: "Porsche",
//     model: "Spyder",
//     year: 2023,
//     color: "yello",
//     subCar: {
//         brand: "Rimac",
//         color: "blue"
//     },
//     numArray: [1,2,3],
//     startEngine: function() {
//         console.log("Engine started");
//     }
// },
// // let key = "brand"

// // console.log(car.brand) //Porsche
// // console.log(car["brand"]) // Porsche
// // console.log(car[key]) // Porsche
// // console.log(car.subCar.brand) // Rimac
// // console.log(car["subCar"]["brand"]) // RImac

// console.log(Object.keys(car)); // ['type', 'brand', 'model', 'year', 'color', 'subCar']
// console.log(Object.values(car)); // ['Supercar', 'Porsche', 'Spyder', 2023, 'yello', {…}]
// console.log(Object.entries(car)); // Return both keys and values

// // =============== Arrays ===============

// // =============== Functions ===============
// // We want to create a function that will take 2 numbers as input and return the sume of those numbers

// // () → An expression commonly used when invoking a function or method

// function printPaper(pdf, wordDoc) {
//     console.log("Printing...")
//     return "printed." // paper
// }
// function sumOfTwoNumber(a,b) {
//     // Body of the function
//     return a + b
// }

// let c = sumOfTwoNumber(5,12)

let arr = [1,2,3,4,5,6,7,8,9,10]
let obj = {key: "value 1", key: "value", key3:"values3"}

// 1. Write a function that will display all the numbers from 1 to 999
function numbersFrom1To999() {
    for (let i = 1; i <= 999; i++) {
        console.log(i)
    }
}
numbersFrom1To999

// 2. Write a function that will display all the even numbers from 1 to 999

// 3. Write a function that will display all the numbers divisibile by 7 from 1 to 999

// 4. Write a function that will iterate through an object and display all of its keys and values

// 5. Write a function that will iterate through an array and display all of its elements

// 6. Write a function that will iterate through a numbers array and add 1 to each of its values

// 7. Write a function that will iterate a prompt where you write the name of the month and it will return (log) which season the month is in

