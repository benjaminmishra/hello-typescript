interface HomeSapiens {
  fullName: string;
  address: string;
  age: number;
  position: number;
  talk: () => void;
  move: (from: number, to: number) => void;
}

class Humans implements HomeSapiens {
  fullName: string = "Test";
  address: string = "Earth";
  age: number = 100000;
  position: number = 0;

  talk: () => void = () => {
    console.log();
  };

  move: (to: number) => void = (to: number) => {
    this.position += to;
  };
}


type animal = {
    
}