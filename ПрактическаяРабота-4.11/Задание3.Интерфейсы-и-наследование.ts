interface CanRun {
    run(): void;
}

interface CanSwim {
    swim(): void;
}

interface CanFly {
    fly(): void;
}

abstract class Human implements CanRun, CanSwim, CanFly {
    abstract run(): void;
    abstract swim(): void;
    abstract fly(): void;
}

class NibiruAthlete extends Human {
    run(): void {
        console.log("Nibiru Athlete running");
    }

    swim(): void {
        throw new Error("Cannot swim");
    }

    fly(): void {
        throw new Error("Cannot fly");
    }
}

class Earthling extends Human {
    run(): void {
        console.log("Earthling running");
    }

    swim(): void {
        console.log("Earthling swimming");
    }

    fly(): void {
        throw new Error("Cannot fly");
    }
}

class Kryptonian extends Human {
    run(): void {
        console.log("Kryptonian running");
    }

    swim(): void {
        console.log("Kryptonian swimming");
    }

    fly(): void {
        console.log("Kryptonian flying");
    }
}

// Пример использования
const athlete = new NibiruAthlete();
athlete.run();
// athlete.swim(); // Вызовет ошибку

const earthling = new Earthling();
earthling.run();
earthling.swim();
// earthling.fly(); // Вызовет ошибку

const kryptonian = new Kryptonian();
kryptonian.run();
kryptonian.swim();
kryptonian.fly();
 