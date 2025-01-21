var fruits = [
    { fruitId: 1, fruitName: "Apel", fruitType: "IMPORT", stock: 10 },
    { fruitId: 2, fruitName: "Kurma", fruitType: "IMPORT", stock: 20 },
    { fruitId: 3, fruitName: "apel", fruitType: "IMPORT", stock: 50 },
    { fruitId: 4, fruitName: "Manggis", fruitType: "LOCAL", stock: 100 },
    { fruitId: 5, fruitName: "Jeruk Bali", fruitType: "LOCAL", stock: 10 },
    { fruitId: 6, fruitName: "KURMA", fruitType: "IMPORT", stock: 20 },
    { fruitId: 7, fruitName: "Salak", fruitType: "LOCAL", stock: 150 },
];
var normalizeFruitName = function (fruitName) { return fruitName.toLowerCase().trim(); };
var getFruitNames = function (fruits) {
    var uniqueFruits = [];
    // Normalize and remove duplicates
    fruits.forEach(function (fruit) {
        var normalizedFruitName = normalizeFruitName(fruit.fruitName);
        if (uniqueFruits.indexOf(normalizedFruitName) === -1) {
            uniqueFruits.push(normalizedFruitName);
        }
    });
    return uniqueFruits;
};
var groupFruitsByType = function (fruits) {
    return fruits.reduce(function (acc, fruit) {
        var normalizedFruitName = normalizeFruitName(fruit.fruitName);
        if (!acc[fruit.fruitType]) {
            acc[fruit.fruitType] = [];
        }
        if (acc[fruit.fruitType].indexOf(normalizedFruitName) === -1) {
            acc[fruit.fruitType].push(normalizedFruitName);
        }
        return acc;
    }, {});
};
var getTotalStockByType = function (fruits) {
    return fruits.reduce(function (acc, fruit) {
        if (!acc[fruit.fruitType]) {
            acc[fruit.fruitType] = 0;
        }
        acc[fruit.fruitType] += fruit.stock;
        return acc;
    }, {});
};
console.log("Buah yang dimiliki Andi:", getFruitNames(fruits));
console.log("Buah berdasarkan wadah:", groupFruitsByType(fruits));
console.log("Total stock per wadah:", getTotalStockByType(fruits));
