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
  { fruitId: 5, fruitName: "KURMA", fruitType: "IMPORT", stock: 20 },
  { fruitId: 5, fruitName: "Salak", fruitType: "LOCAL", stock: 150 },
];

const getFruitNames = (fruits: IFruit[]): string[] => fruits.map((fruit) => fruit.fruitName);

const groupFruitsByType = (fruits: IFruit[]): { [key: string]: string[] } => {
  return fruits.reduce((acc, fruit) => {
    if (!acc[fruit.fruitType]) {
      acc[fruit.fruitType] = [];
    }
    acc[fruit.fruitType].push(fruit.fruitName);
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

/*Komen
- Nama buah yang tidak konsisten: Terdapat perbedaan kapitalisasi antara 'Apel' dan 'apel', 
serta 'Kurma' dan 'KURMA'. Hal ini dapat menimbulkan kebingungan dalam pengelompokan data. 
Untuk memperbaiki hal ini, kita dapat menormalkan nama buah sebelum pengelompokan (misalnya, dengan menggunakan toLowerCase()).

- ID buah yang sama: Terdapat dua buah dengan fruitId yang sama yaitu 5, yakni "Jeruk Bali" dan "KURMA". 
fruitId seharusnya unik, dan hal ini perlu diperbaiki jika data tersebut digunakan dalam sistem yang lebih besar.*/
