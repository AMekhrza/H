// Влияние на удобство работы:
// Использование перечислений делает код более читаемым и безопасным.
// Вместо работы со строками, которые могут быть подвержены ошибкам
// из-за опечаток, мы используем строго определённые именованные константы.
// Это упрощает понимание кода, а также предоставляет дополнительные 
// преимущества, такие как автодополнение в редакторах кода и предотвращение
// неправильного использования несуществующих направлений.
// В целом, это делает код более надёжным и удобным для поддержки.

enum Direction {
    Up,
    Down,
    Left,
    Right,
}

type Player = {
    x: number,
    y: number,
    move: (direction: Direction, amount: number) => void,
}

const player: Player = {
    x: 0,
    y: 0,
    move: function (direction: Direction, amount: number) {
        switch (direction) {
            case Direction.Up:
                this.y += amount;
                break;
            case Direction.Down:
                this.y -= amount;
                break;
            case Direction.Left:
                this.x -= amount;
                break;
            case Direction.Right:
                this.x += amount;
                break;
            default:
                break;
        }
    }
}

player.move(Direction.Up, 1);
player.move(Direction.Down, 2);
player.move(Direction.Left, 2); 
player.move(Direction.Right, 3);

console.log(player.x === 1); // true
console.log(player.y === -1); // true
