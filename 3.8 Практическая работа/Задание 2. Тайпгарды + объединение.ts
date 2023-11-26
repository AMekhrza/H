type Cat = {
    name: string,
    meow: () => string,
};

type Dog = {
    name: string,
    bark: () => string,
};

const cat: Cat = {
    name: 'Pushok',
    meow: () => 'meow!',
};

const dog: Dog = {
    name: 'Bobik',
    bark: () => 'bark!',
};

// Пользовательский тайпгард для Cat
function isCat(pet: any): pet is Cat {
    return (pet as Cat).meow !== undefined;
}

// Пользовательский тайпгард для Dog
function isDog(pet: any): pet is Dog {
    return (pet as Dog).bark !== undefined;
}

// Реализация с использованием обычных тайпгардов
function whatDoesThePetSay(pet: Dog | Cat): string {
    if ('meow' in pet) {
        return pet.meow();
    } else if ('bark' in pet) {
        return pet.bark();
    }
    return 'Nothing :(';
}

/* // Реализация с использованием пользовательских тайпгардов
function whatDoesThePetSay(pet: Dog | Cat): string {
    if (isCat(pet)) {
        return pet.meow();
    } else if (isDog(pet)) {
        return pet.bark();
    }
    return 'Nothing :(';
} */

/* // Реализация через приведение типов 
function whatDoesThePetSay(pet: Dog | Cat): string {
    if ((pet as Cat).meow) {
        return (pet as Cat).meow();
    } else if ((pet as Dog).bark) {
        return (pet as Dog).bark();
    }
    return 'Nothing :(';
} */

console.log(whatDoesThePetSay(cat)); // Должно вывести 'meow!'
console.log(whatDoesThePetSay(dog)); // Должно вывести 'bark!'
 

// Сравнение и Анализ:
// Обычные тайпгарды просты в использовании и хорошо подходят для простых сценариев, как в данном случае.

// Пользовательские тайпгарды полезны в более сложных ситуациях, когда требуется более сложная логика проверки типа.
//  Они делают код более читаемым и модульным.

// Тайпгарды через оператор in — это эффективный и простой способ проверки наличия свойства в объекте.
//  Они идентичны обычным тайпгардам в данной задаче.

// Приведение типов — это не лучший способ, так как он уменьшает безопасность типов и может привести к ошибкам в рантайме.
//  Однако, это может быть полезно в некоторых специфических случаях.

// В данной задаче, самым простым и эффективным кажется использование обычных тайпгардов или тайпгардов через
//  оператор in, так как они обеспечивают простоту и читаемость кода, не требуя дополнительной логики проверки типов.