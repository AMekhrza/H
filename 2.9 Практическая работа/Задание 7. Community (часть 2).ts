type User = {
    name: string;
    age: number;
    occupation: string;
};

type Admin = {
    name: string;
    age: number;
    role: string;
};

// Объединение типов User и Admin в тип Person
export type Person = User | Admin;

export const persons: Person[] = [
    {
        name: 'Roman Abramov',
        age: 25,
        occupation: 'Millionaire'
    },
    {
        name: 'Jane Doe',
        age: 32,
        role: 'Administrator'
    },
    {
        name: 'Andrey Fox',
        age: 23,
        occupation: 'Developer'
    },
    {
        name: 'Bruce Willis',
        age: 64,
        role: 'World saver'
    }
];

export function logPerson(person: Person) {
    // Проверяем, является ли person типом Admin или User и выводим соответствующую информацию
    if ('role' in person) {
        console.log(` - ${person.name}, ${person.age}, ${person.role}`);
    } else {
        console.log(` - ${person.name}, ${person.age}, ${person.occupation}`);
    }
}

persons.forEach(logPerson);
