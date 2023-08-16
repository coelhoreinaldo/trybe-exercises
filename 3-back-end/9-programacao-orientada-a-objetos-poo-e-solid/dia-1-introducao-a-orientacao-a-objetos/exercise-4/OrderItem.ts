export default class OrderItem {
  private _name: string;
  private _price: number;

  constructor(name: string, price: number) {
    this._name = name;
    this._price = price;
  }

  get name(): string {
    return this._name;
  }

  get price(): number { 
    return this._price;
  }

  set name(name: string) {
    this._name = name;
  }

  set price(price: number) {
    this._price = price;
  }
}