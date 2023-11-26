// Определяем тип User
export type User = {
    name: string;
    age: number;
    occupation: string;
};

// Используем тип User для массива users
export const users: User[] = [
    {
        name: 'Roman Abramov',
        age: 25,
        occupation: 'Millionaire'
    },
    {
        name: 'Andrey Fox',
        age: 23,
        occupation: 'Developer'
    }
];

// Используем тип User в функции logPerson
export function logPerson(user: User) {
    console.log(` - ${user.name}, ${user.age}`);
}

console.log('Users:');
users.forEach(logPerson);
