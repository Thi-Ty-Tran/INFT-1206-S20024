console.log("Script is running...")

// -------------Objects------------------
let car = {
    type: "Supercar", // type => KEY, Supercar => VALUE
    brand: "Porsche",
    model: "Spyder",
    year: 2023,
    color: "yello",
    subCar: {
        brand: "Rimac",
        color: "blue"
    },
    numArray: [1,2,3],
    startEngine: function() {
        console.log("Engine started");
    }
},
// let key = "brand"

// console.log(car.brand) //Porsche
// console.log(car["brand"]) // Porsche
// console.log(car[key]) // Porsche
// console.log(car.subCar.brand) // Rimac
// console.log(car["subCar"]["brand"]) // RImac

console.log(Object.keys(car)); // ['type', 'brand', 'model', 'year', 'color', 'subCar']
console.log(Object.values(car)); // ['Supercar', 'Porsche', 'Spyder', 2023, 'yello', {…}]
console.log(Object.entries(car)); // Return both keys and values

// =============== Arrays ===============
123
// =============== Functions ===============
