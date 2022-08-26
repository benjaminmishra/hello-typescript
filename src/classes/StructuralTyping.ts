class Point1 {
    x = 0;
    y = 0;
  }
   
  class Point2 {
    x = 0;
    y = 0;
  }
   
  // OK
  const p: Point1 = new Point2();



  class Person {
    name: string;
    age!: number;
  }
   
  class Employee {
    name!: string;
    age!: number;
    salary!: number;
  }
   
  // OK
  const p: Person = new Employee();