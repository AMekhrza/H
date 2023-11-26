type User = {
    type: 'user';
    name: string;
    age: number;
    occupation: string;
};

type Admin = {
    type: 'admin';
    name: string;
    age: number;
    role: string;
};

export type Person = User | Admin;

export const persons: Person[] = [
    { type: 'user', name: 'Max Mustermann', age: 25, occupation: 'Chimney sweep' },
    { type: 'admin', name: 'Jane Doe', age: 32, role: 'Administrator' },
    { type: 'user', name: 'Kate Müller', age: 23, occupation: 'Astronaut' },
    { type: 'admin', name: 'Bruce Willis', age: 64, role: 'World saver' },
    { type: 'user', name: 'Wilson', age: 23, occupation: 'Ball' },
    { type: 'admin', name: 'Agent Smith', age: 23, role: 'Administrator' }
];

export const isAdmin = (person: Person): person is Admin => person.type === 'admin';
export const isUser = (person: Person): person is User => person.type === 'user';

export function logPerson(person: Person) {
    let additionalInformation = '';
    if (isAdmin(person)) {
        additionalInformation = person.role;
    } else if (isUser(person)) {
        additionalInformation = person.occupation;
    }
    console.log(` - ${person.name}, ${person.age}, ${additionalInformation}`);
}

export function filterPersons<T extends Person>(
    persons: Person[],
    criteria: Partial<Record<keyof Person, any>>
): T[] {
    return persons.filter((person): person is T => {
        const criteriaKeys = Object.keys(criteria) as (keyof Person)[];
        return criteriaKeys.every((fieldName) => {
            return person[fieldName] === criteria[fieldName];
        });
    });
}

console.log('Users of age 23:');

filterPersons<User>(
    persons,
    {
        age: 23
    }
).forEach(logPerson);
