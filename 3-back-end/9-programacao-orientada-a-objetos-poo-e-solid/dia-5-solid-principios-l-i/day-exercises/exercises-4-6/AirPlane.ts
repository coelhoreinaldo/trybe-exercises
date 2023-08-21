import { FlyingVehicle } from "./interfaces";

export default class AirPlane implements FlyingVehicle {
  fly(): void { console.log('Flying a AirPlane'); }
}