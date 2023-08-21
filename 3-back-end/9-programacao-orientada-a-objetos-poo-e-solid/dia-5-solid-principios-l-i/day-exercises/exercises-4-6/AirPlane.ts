import { IVehicle } from "./interfaces";

export default class AirPlane implements IVehicle {
  fly(): void { console.log('Flying a AirPlane'); }
}