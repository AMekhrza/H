class Job {
    private role: string;
    private salary: number;

    constructor(role: string, salary: number) {
        this.role = role;
        this.salary = salary;
    }

    getSalary(): number {
        return this.salary;
    }

    work(personName: string): void {
        console.log(`${personName} сейчас работает как ${this.role}`);
    }
}

class Person {
    private job: Job;
    private name: string;

    constructor(name: string, job: Job) {
        this.name = name;
        this.job = job;
    }

    setJob(job: Job): void {
        this.job = job;
    }

    getSalary(): number {
        return this.job.getSalary();
    }

    work(): void {
        this.job.work(this.name);
    }
}

// Создание экземпляров Job
const developer = new Job("Разработчик", 100000);
const designer = new Job("Дизайнер", 80000);

// Создание экземпляров Person
const alice = new Person("Алиса", developer);
const bob = new Person("Боб", designer);

// Поработаем немного
alice.work();
bob.work();

// Переквалификация работников
alice.setJob(designer);
bob.setJob(developer); 

// Снова поработаем
alice.work();
bob.work();
