//Basic Types
//number
console.log("Basic Types");
var a=1;
console.log("number a:"+a);
//String
var s="Hi";
console.log("String s:"+s);
//Boolean
var b=true;
console.log("boolean b:"+b);
//number array
var arr=[1,2,3];
console.log("array arr:"+arr);
//tuple
var tup : [string, number];
tup=["Hello",1];
console.log("tuple tup:"+tup);
//enum
enum Name {"Sunday"=1,"Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"};
console.log("enum Name:");
for(let i=1;i<=Name.Saturday;i++){
    console.log(Name[i]+":"+i);
}


// Functions
//add function
console.log("");
console.log("Functions");
let add=(num1: number,num2: number) => console.log("Sum of two  numbers "+num1+" and "+num2+" is: "+ (num1 + num2));
//Capitalize function
let capitalize=(str: string) => console.log("Capitalize of "+str+" is: "+str.charAt(0).toUpperCase() + str.slice(1).toLowerCase());

//Function Call
add(4,3);
capitalize("Hello world");

//Interface Person is created
console.log("");
console.log("Interface");
interface Person{
    name: string,
    age: number,
    email: string
}
let p=<Person>{}
p.name="Sam";
p.age=25;
p.email="123@gmail.com";
console.log("person p:");
console.log("Name: "+p.name);
console.log("age: "+p.age);
console.log("Email: "+p.email);

//Class name Car is created
console.log("");
console.log("Class");
class Car{
    make: string;
    model: string;
    year: number;
    displayInfo = () =>{
        console.log("Car details");
        console.log('Make: '+this.make);
        console.log('Model: '+this.model);
        console.log("Year: "+this.year);
    }
}

//Object car is created for class Car
let car = new Car();
//Values assigned for the variables
car.make="TATA";
car.model="EV";
car.year=2023;
//Function call 
car.displayInfo();

//Generic function name reverseArray
console.log("");
console.log("Generic Function");
let ReverseArray = <Arr1>(ar): any[] =>{
    return ar.reverse();
}
console.log("Before Reversing: "+["Hi",1,"Hello",2,true]);
console.log("After Reversing: "+ReverseArray(["Hi",1,"Hello",2,true]));