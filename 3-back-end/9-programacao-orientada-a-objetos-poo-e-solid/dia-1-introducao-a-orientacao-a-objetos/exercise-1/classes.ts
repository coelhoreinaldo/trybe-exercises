class Tv {
  brand: string;
  size: number;
  resolution: string;
  connections: string;
  connectedTo?: string;

  constructor(b: string, s: number, r:string, connects: string, connectedT?: string){
    console.log(`Creating ${b} tv`)

    this.brand = b;
    this.size = s;
    this.resolution = r;
    this.connections = connects;
    this.connectedTo = connectedT;
  }

  turnOn(){
    console.log(`${this.brand}, ${this.size}, ${this.resolution}, ${this.connections}, ${this.connectedTo}`)
  };
}

new Tv('philips', 42, 'HD', 'HDMI')