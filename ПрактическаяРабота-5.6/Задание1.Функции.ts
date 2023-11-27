type Person = {
    name: string;
    age: number;
};

type Bridge = {
    city: string;
    age: number;
};

type Wine = {
    manufacturer: string;
    age: number;
    grade: string;
};

type WithAge = {
    age: number;
};

function getOldestItem<T extends WithAge>(items: T[]): T {
    return items.sort((a, b) => b.age - a.age)[0];
}

// Тестовые данные для Person
const persons: Person[] = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 }, 
    { name: "Carol", age: 35 }
];

// Тестовые данные для Bridge
const bridges: Bridge[] = [
    { city: "London", age: 120 },
    { city: "Brooklyn", age: 135 },
    { city: "Golden Gate", age: 83 }
]; 

// Тестовые данные для Wine
const wines: Wine[] = [
    { manufacturer: "Winery A", age: 10, grade: "A" },
    { manufacturer: "Winery B", age: 5, grade: "B" },
    { manufacturer: "Winery C", age: 15, grade: "C" }
];

const oldestPerson = getOldestItem(persons);
const oldestBridge = getOldestItem(bridges);
const oldestWine = getOldestItem(wines);

console.log("Oldest Person:", oldestPerson);
console.log("Oldest Bridge:", oldestBridge);
console.log("Oldest Wine:", oldestWine);
 