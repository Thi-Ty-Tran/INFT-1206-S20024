
let arr = [1,2,3,4,5,6,7,8,9,10]
let obj = {key: "value 1", key: "value 2", key3:"value 3"}

// 1. Write a function that will display all the numbers from 1 to 999

function numbersFrom1To999() {
    for (let i = 1; i <= 999; i++) {
        console.log(i)
    }
}
// numbersFrom1To999()

// 2. Write a function that will display all the even numbers from 1 to 999

function evenNumbersFrom1to999() {
    for (let i = 1; i <=999; i++) {
        if (i%2 === 0) {
        console.log(i)
        }
    }
}
// evenNumbersFrom1to999()

// 3. Write a function that will display all the numbers divisibile by 7 from 1 to 999

function divisibileBY7From1to999() {
    for (let i = 1; i <=999; i++) {
        if (i%7 === 0) {
        console.log(i)
        }
    }
}
// divisibileBY7From1to999()

// 4. Write a function that will iterate through an object and display all of its keys and values



// 5. Write a function that will iterate through an array and display all of its elements

// 6. Write a function that will iterate through a numbers array and add 1 to each of its values

// 7. Write a function that will iterate a prompt where you write the name of the month and it will return (log) which season the month is in