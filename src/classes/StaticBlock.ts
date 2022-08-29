class Foo {
    private static count = 0;
 
    static {
        console.log("Hello World");
    }
}

function loadLastInstances() :string {
    return "Instance";
}


let foo = new Foo();


