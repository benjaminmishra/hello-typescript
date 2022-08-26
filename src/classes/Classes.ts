interface CarInterface {
  engine: string;
  drive();
  disp(): void;
}

interface Chassi {
  chassiNo: number;
}

class Car implements CarInterface, Chassi {
  public engine: string;
  public chassiNo: number;
  protected owner: string;
  public readonly Name: string;

  constructor(engine: string) {
    this.engine = engine;
    this.chassiNo = 0;
    this.owner = "no one";
    this.Name = "Car";
    console.log("This is a car");
  }

  drive() {
    console.log("driving");
  }

  disp(): void {
    console.log("Engine is :" + this.engine);
  }
}

class BMW extends Car {
  public bwmChassiNo = super.owner;

  constructor(chassiNo: string);
  constructor(chassiNo: number);
  constructor(chassiNo: string | number) {
    let carName: string;
    if (typeof chassiNo === "string") {
      carName = chassiNo;
    } else {
      carName = chassiNo.toString()
    }
    super(carName);
  }

  drive() {
    console.log("bmw driving");
    super.drive();
  }
}

let car: Car = new Car("4 stroke");
console.log(car.engine);
car.disp();


//-----------------------------------

class Thing {
  private _size: number = 0;

  get size(): number {
    console.log("this is a getter");
    return this._size;
  }

  set size(value: string | number | boolean) {
    let num = Number(value);

    // Don't allow NaN, Infinity, etc

    if (!Number.isFinite(num)) {
      this._size = 0;
      return;
    }

    this._size = num;
  }
}

const thing = new Thing();

console.log(thing.size);
thing.size = true;
