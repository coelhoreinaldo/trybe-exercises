import Client from "./Client";
import OrderItem from "./OrderItem";

export default class Order {
  private _client: Client;
  private _items: OrderItem[];
  private _payment: 'cartão' | 'dinheiro' | 'pix';
  private _discount?: number;

  constructor(client: Client, items: OrderItem[], payment: 'cartão' | 'dinheiro' | 'pix', discount?: number) {
    this._client = client;
    this._items = items;
    this._payment = payment;
    this._discount = discount;
  }

  get client() {
    return this._client;
  }

  get items() {
    return this._items;
  }

  get payment() {
    return this._payment;
  }

  get discount() {
    return this._discount;
  }

  set discount(discount: number | undefined) {
    this._discount = discount;
  }

  calculateTotal() {
    return this._items.reduce((acc, {price}) => acc + price, 0);
  }

  calculateTotalWithDiscount(): number {
    return this.calculateTotal() * (1 - (this.discount || 0));
  }
  
}