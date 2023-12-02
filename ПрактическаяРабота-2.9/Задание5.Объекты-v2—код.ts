function areEqual(objectA: {[key: string]: any}, objectB: {[key: string]: any}): boolean {
    // Преобразование объектов в JSON строки
    const jsonA = JSON.stringify(objectA);
    const jsonB = JSON.stringify(objectB);

    // Сравнение JSON строк
    return jsonA === jsonB;
}

// Пример использования функции
let object1 = { a: 1, b: 2 };
let object2 = { a: 1, b: 2 };
console.log(areEqual(object1, object2)); // Должно вывести true

let object3 = { a: 1, b: 3 };
console.log(areEqual(object1, object3)); // Должно вывести false
