function areEqual(objectA: {[key: string]: any}, objectB: {[key: string]: any}): boolean {
    // Получаем ключи обоих объектов
    const keysA = Object.keys(objectA);
    const keysB = Object.keys(objectB);

    // Проверяем количество ключей
    if (keysA.length !== keysB.length) {
        return false;
    }

    // Проверяем соответствие значений для каждого ключа
    for (const key of keysA) {
        if (objectA[key] !== objectB[key]) {
            return false;
        }
    }

    // Объекты равны, если пройдены все проверки
    return true; 
}

// Пример использования функции
let object1 = { a: 1, b: 2 };
let object2 = { a: 1, b: 2 };
console.log(areEqual(object1, object2)); // Должно вывести true

let object3 = { a: 1, b: 3 };
console.log(areEqual(object1, object3)); // Должно вывести false
