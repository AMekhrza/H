type MyReadonly<T, K extends keyof T> = Omit<T, K> & Readonly<Pick<T, K>>;

// прокомментируйте задачу 1, чтобы иметь возможность выполнить эту задачу


// type Todo = {
//   title: string;
//   description: string;
//   completed: boolean;
// };

// const todo: MyReadonly<Todo, 'title' | 'description'> = {
//   title: "Hey",
//   description: "foobar",
//   completed: false,
// };

// todo.title = "Hello"; // Ошибка: не удается назначить свойство только для чтения
// todo.description = "barFoo"; //Ошибка: не удается переназначить свойство, доступное только для чтения
// todo.completed = true; // OK
