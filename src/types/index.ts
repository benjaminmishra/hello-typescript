let employee0: {
    firstName: string;
    lastName: string;
    age: number;
    jobTitle: string;
  	retire : () => Date
}

employee0 = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    jobTitle: 'Web Developer',
    retire: function() {
        return new Date();
      }
};


let employee2: {
    firstName: string;
    lastName: string;
    age: number;
    jobTitle: string;
  	retire : () => Date
} = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    jobTitle: 'Web Developer',
  	retire: function() {
      return new Date();
    }
};
