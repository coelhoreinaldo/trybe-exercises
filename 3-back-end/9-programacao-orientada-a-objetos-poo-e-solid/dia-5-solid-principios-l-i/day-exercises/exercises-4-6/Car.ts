import { IVehicle } from "./interfaces";

export default class Car implements IVehicle {
  drive(): void { console.log('Drive a car'); }

  fly(): void { console.log('Flying a car'); }
}