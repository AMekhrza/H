
// В исходном коде используется приведение типа as House, что позволяет TypeScript считать, 
// что объект house будет соответствовать структуре типа House. Ошибки возникают, когда мы 
// комментируем строки, отвечающие за присваивание обязательных свойств, так как TypeScript
//  доверяет нам на слово при использовании as, но фактически эти свойства отсутствуют.

// Переписав функцию getHouse так, чтобы объект house инициализировался сразу со всеми 
// необходимыми свойствами, мы избегаем подобных ошибок. Это повышает надёжность кода и
//  упрощает его понимание.

type House = {
    street: string,
    apartmentCount: number,
    buildInfo: {
        year: number,
        material: string,
    }
};

function getHouse(): House {
    // Создаем и возвращаем объект сразу с заполненными полями
    return {
        street: 'Pushkina',
        apartmentCount: 76,
        buildInfo: {
            year: 1996,
            material: 'rocks',
        }
    };
}

function handleHouse(): void {
    const house: House = getHouse();

    console.log(`${house.street} st., ${house.apartmentCount} apartments total`);
    console.log(`Built in ${house.buildInfo.year}, built from ${house.buildInfo.material}`);
}

handleHouse();
 