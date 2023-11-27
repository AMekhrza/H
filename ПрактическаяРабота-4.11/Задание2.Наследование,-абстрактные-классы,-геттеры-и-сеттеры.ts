// Сопроводительный текст
// Классы Product и OrderItem (вместе с его производными классами) обеспечивают
// гибкую систему для управления заказами товаров с различными условиями, такими 
// как скидки, минимальные количества для скидок и транспортные расходы. Геттеры 
// и сеттеры используются для управления свойствами классов, обеспечивая инкапсуляцию 
// и контроль над данными. Абстрактные методы и переопределение методов в производных 
// классах позволяют различным типам заказов иметь свою уникальную логику расчета стоимости. 
// Метод compare используется для сортировки заказов по стоимости. 
// Эта реализация демонстрирует преимущества наследования и полиморфизма

class Product {
    private _name: string;
    private _price: number;

    constructor(name: string, price: number) {
        this._name = name;
        this._price = price;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get price(): number {
        return this._price;
    }

    set price(value: number) {
        this._price = value;
    }

    log(): void {
        console.log(`${this._name}; ${this._price}`);
    }
}

abstract class OrderItem {
    protected product: Product;
    protected quantity: number;

    constructor(product: Product, quantity: number) {
        this.product = product;
        this.quantity = quantity;
    }

    abstract getCost(): number;

    log(): void {
        this.product.log();
        console.log(`; Quantity: ${this.quantity}`);
    }

    compare(other: OrderItem): number {
        return this.getCost() - other.getCost();
    }
}

class DiscountedOrderItem extends OrderItem {
    private discount: number;

    constructor(product: Product, quantity: number, discount: number) {
        super(product, quantity);
        this.discount = discount;
    }

    getCost(): number {
        return (this.product.price - this.discount) * this.quantity;
    }
}

class BulkDiscountOrderItem extends OrderItem {
    private discountPercent: number;
    private minimumQuantity: number;

    constructor(product: Product, quantity: number, discountPercent: number, minimumQuantity: number) {
        super(product, quantity);
        this.discountPercent = discountPercent;
        this.minimumQuantity = minimumQuantity;
    }

    getCost(): number {
        if (this.quantity >= this.minimumQuantity) {
            return this.product.price * this.quantity * (1 - this.discountPercent / 100);
        }
        return this.product.price * this.quantity;
    }
}

class TransportExpenseOrderItem extends OrderItem {
    private transportCost: number;

    constructor(product: Product, quantity: number, transportCost: number) {
        super(product, quantity);
        this.transportCost = transportCost;
    }

    getCost(): number {
        return (this.product.price + this.transportCost) * this.quantity;
    }
}

const product1 = new Product("Product1", 300);
const product2 = new Product("Product2", 500);

const orders: OrderItem[] = [
    new DiscountedOrderItem(product1, 2, 50),
    new DiscountedOrderItem(product2, 3, 75),
    new BulkDiscountOrderItem(product1, 20, 5.825, 15),
    new BulkDiscountOrderItem(product2, 10, 10, 5),
    new TransportExpenseOrderItem(product1, 5, 20),
    new TransportExpenseOrderItem(product2, 2, 30)
];

orders.forEach(order => order.log());

orders.sort((a, b) => b.compare(a));

console.log("\n Sorted orders:");
orders.forEach(order => order.log());
  