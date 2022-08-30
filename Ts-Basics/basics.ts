// primitives: number, boolean, string
//More complex Tyoes: arrays, objects
//Function Types, parameters...

//Primitives

let age: number = 24
let userName: string = 'Noah'
let instructor: boolean
instructor = true || false;

// More complex types

let hobbies: string[];

type Person = {
    name: string,
    age: number
}

let person: Person

let people : Person[]

//Type Inference

let course: string | number  = 'Learn TypeScript';

course = 12334

// Functions & Types 

function add (a:number, b:number ):number {
    return a + b
}

function printOutput(value: any) {
    console.log(value)
}

//Generics

function insertAtBegginning<T>(array:T[], value:T) {
    const newArray = [value, ...array]
    return newArray
}

const demoArray = [1, 2, 3]

const updatedArray = insertAtBegginning(demoArray, -1)
