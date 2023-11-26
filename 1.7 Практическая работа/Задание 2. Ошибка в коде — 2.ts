//Задание 2. Ошибка в коде — 2
/*
Предоставленный фрагмент кода предназначен для регистрации координат x и y положения мыши, когда пользователь щелкает где
-либо в документе:

document.addEventListener('click', (e) => {
    const coords = [e.posX, e.posY];
    console.log(`Point is ${coords[0]}, ${coords[1]}`);
});
*/


/*В коде допущена ошибка: свойства PosX и posY не существуют для объекта event e.
Правильными свойствами, которые следует использовать для получения положения мыши, являются clientX для координаты x и client для координаты y.*/

document.addEventListener('click', (e) => {
    const coords = [e.clientX, e.clientY];
    console.log(`Point is ${coords[0]}, ${coords[1]}`);
}); 