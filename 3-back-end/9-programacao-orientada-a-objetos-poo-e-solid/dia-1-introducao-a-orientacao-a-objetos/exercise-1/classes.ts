class Tv {
  private _brand: string;
  private _size: number;
  private _resolution: string;
  private _connections: string[];
  private _connectedTo?: string;

  constructor( 
    brand: string, 
    size: number, 
    resolution: string, 
    connections: string[]
    ){
    console.log(`Creating ${brand} tv`)

    this._brand = brand;
    this._size = size;
    this._resolution = resolution;
    this._connections = connections;
  }

  turnOn():void{
    console.log(`${this._brand}, ${this._size}, resolution: ${this._resolution}, \n\ available connections: ${this._connections}, ${this._connectedTo}`)
  };

  get connectedTo(): string | undefined {
    return this._connectedTo;
  }
  
  set connectedTo(newValue:string){
    if(this._connections.includes(newValue)){
      this._connectedTo = newValue
    } else {
      console.log('Sorry, connection unavailable!');
    }
    
  }
}

const tv1 = new Tv('philips', 42, 'HD', ['HDMI', 'Ethernet'])

tv1.connectedTo = 'HDMI'
console.log('connectedTo', tv1.connectedTo);

tv1.turnOn();