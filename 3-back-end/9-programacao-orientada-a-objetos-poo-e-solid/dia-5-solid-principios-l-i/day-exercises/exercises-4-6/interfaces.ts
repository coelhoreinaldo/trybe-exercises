// ./interfaces.ts
export interface FlyingVehicle {
  fly(): void;
}

export interface ICar {
  drive(): void;
};

export interface IVehicle extends FlyingVehicle, ICar {}
