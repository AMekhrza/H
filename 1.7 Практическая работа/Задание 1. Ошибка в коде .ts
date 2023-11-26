//Задание 1. Ошибка в коде
interface Actor {
    name: string;
    firstName: string;
    country: string;
    city: string;
    hasOskar: boolean;
    filmsCount: number;
    age: number; // Убедитесь, что возраст соответствует номеру типа
    languages: string[];
}

const actor: Actor = { 
    name: 'Michael',
    firstName: 'Ivanov',
    country: 'Russia',
    city: 'Machachkala',
    hasOskar: false,
    filmsCount: 10,
    age: 14, // Removed the quotes to store age as a number
    languages: ['RU-ru', 'EN-us', 'TR-tr'],
};

const howOldWillBeActorAfterTwentyYears = (actor: Actor) => {
    return actor.age + 20; // Теперь это выполнит арифметическое сложение
}
console.log(howOldWillBeActorAfterTwentyYears(actor)); // Теперь должно войти 34