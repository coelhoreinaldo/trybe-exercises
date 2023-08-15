"use strict";
class Tv {
    constructor(b, s, r, connects, connectedT) {
        console.log(`Creating ${b} tv`);
        this.brand = b;
        this.size = s;
        this.resolution = r;
        this.connections = connects;
        this.connectedTo = connectedT;
    }
    turnOn() {
        console.log(`${this.brand}, ${this.size}, ${this.resolution}, ${this.connections}, ${this.connectedTo}`);
    }
    ;
}
new Tv('philips', 42, 'HD', 'HDMI');
