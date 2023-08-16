"use strict";
class Tv {
    constructor(brand, size, resolution, connections) {
        console.log(`Creating ${brand} tv`);
        this._brand = brand;
        this._size = size;
        this._resolution = resolution;
        this._connections = connections;
    }
    turnOn() {
        console.log(`${this._brand}, ${this._size}, resolution: ${this._resolution}, \n\ available connections: ${this._connections}, ${this._connectedTo}`);
    }
    ;
    get connectedTo() {
        return this._connectedTo;
    }
    set connectedTo(newValue) {
        if (this._connections.includes(newValue)) {
            this._connectedTo = newValue;
        }
        else {
            console.log('Sorry, connection unavailable!');
        }
    }
}
const tv1 = new Tv('philips', 42, 'HD', ['HDMI', 'Ethernet']);
tv1.connectedTo = 'HDMI';
console.log('connectedTo', tv1.connectedTo);
tv1.turnOn();
