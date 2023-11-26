//Задание 3. Использование нетипизированного кода
//Первая часть кода (First part of the code):
/*
Эта функция, по-видимому, пытается подсчитать, сколько людей в массиве данных старше 18 лет и являются мужчинами.
Однако при использовании метода reduce допущена синтаксическая ошибка. Накопитель (acc) должен быть возвращен из обратного вызова,
и начальное значение накопителя должно находиться за пределами круглых скобок обратного вызова.
*/

//Вот исправленная версия:
type Person = {
    age: number;
    isMale: boolean;
  };
  
  function someFunc(data: Person[]): number {
    return data.reduce((acc: number, current: Person) => {
      return acc + Number(current.age > 18 && current.isMale);
    }, 0);
}

// Тестовый пример
const people: Person[] = [
    { age: 20, isMale: true },
    { age: 25, isMale: false },
    { age: 30, isMale: true },
];

const result = someFunc(people);
console.log(result); // При этом будет записан результат работы функции someFunc


//Вторая часть кода (Second part of the code):
/*
Процесс аналогичен первому,
но он более понятен в отношении структуры данных, с которой вы работаете (набор человеческих объектов).
В нем также есть синтаксическая ошибка, аналогичная первой части. Вот исправленная версия:
*/

type Human = {
    name: string,
    age: number,
    gender: 'male' | 'female',
}

function someTypedFunc(data: Human[]): number {
    return data.reduce((acc: number, current: Human) => {
        return acc + Number(current.age > 18 && current.gender === 'male');
    }, 0);
} 

// Тестовый пример
const humans: Human[] = [
    { name: 'John', age: 20, gender: 'male' },
    { name: 'Jane', age: 25, gender: 'female' },
    { name: 'Bob', age: 30, gender: 'male' },
    
];

const result1 = someTypedFunc(humans);
console.log(result1); // Это выведет результат someTypedFunc