type IFruit = {
  fruitId: number;
  fruitName: string;
  fruitType: "IMPORT" | "LOCAL";
  stock: number;
};

const fruits: IFruit[] = [
  { fruitId: 1, fruitName: "Apel", fruitType: "IMPORT", stock: 10 },
  { fruitId: 2, fruitName: "Kurma", fruitType: "IMPORT", stock: 20 },
  { fruitId: 3, fruitName: "apel", fruitType: "IMPORT", stock: 50 },
  { fruitId: 4, fruitName: "Manggis", fruitType: "LOCAL", stock: 100 },
  { fruitId: 5, fruitName: "Jeruk Bali", fruitType: "LOCAL", stock: 10 },
  { fruitId: 6, fruitName: "KURMA", fruitType: "IMPORT", stock: 20 },
  { fruitId: 7, fruitName: "Salak", fruitType: "LOCAL", stock: 150 },
];

const normalizeFruitName = (fruitName: string): string => fruitName.toLowerCase().trim();

const getFruitNames = (fruits: IFruit[]): string[] => {
  const uniqueFruits: string[] = [];
  
  fruits.forEach((fruit) => {
    const normalizedFruitName = normalizeFruitName(fruit.fruitName);
    if (uniqueFruits.indexOf(normalizedFruitName) === -1) {
      uniqueFruits.push(normalizedFruitName);
    }
  });

  return uniqueFruits;
};

const groupFruitsByType = (fruits: IFruit[]): { [key: string]: string[] } => {
  return fruits.reduce((acc, fruit) => {
    const normalizedFruitName = normalizeFruitName(fruit.fruitName);
    if (!acc[fruit.fruitType]) {
      acc[fruit.fruitType] = [];
    }
    if (acc[fruit.fruitType].indexOf(normalizedFruitName) === -1) {
      acc[fruit.fruitType].push(normalizedFruitName);
    }
    return acc;
  }, {} as { [key: string]: string[] });
};

const getTotalStockByType = (fruits: IFruit[]): { [key: string]: number } => {
  return fruits.reduce((acc, fruit) => {
    if (!acc[fruit.fruitType]) {
      acc[fruit.fruitType] = 0;
    }
    acc[fruit.fruitType] += fruit.stock;
    return acc;
  }, {} as { [key: string]: number });
};


console.log("Buah yang dimiliki Andi:", getFruitNames(fruits));
console.log("Buah berdasarkan wadah:", groupFruitsByType(fruits));
console.log("Total stock per wadah:", getTotalStockByType(fruits));
