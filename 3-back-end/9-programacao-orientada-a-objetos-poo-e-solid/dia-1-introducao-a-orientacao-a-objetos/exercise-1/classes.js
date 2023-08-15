"use strict";
class Tv {
    constructor(brand, size, resolution, connections) {
        console.log(`Creating ${brand} tv`);
        this.brand = brand;
        this.size = size;
        this.resolution = resolution;
        this.connections = connections;
    }
    turnOn() {
        console.log(`${this.brand}, ${this.size}, resolution: ${this.resolution}, \n\ available connections: ${this.connections}, ${this.connectedTo}`);
    }
    ;
}
const tv1 = new Tv('philips', 42, 'HD', ['HDMI', 'Ethernet']);
tv1.turnOn();
