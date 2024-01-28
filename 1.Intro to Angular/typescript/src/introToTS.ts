// let username = 'Ivan';
//
// username = 1;
// console.log(username)

let isOpen: boolean = false;

let arrBoolean: boolean[] = [false, true];
let arrayBoolean: Array<boolean> = [false, true]; // not so good


function createUser(username: string, age?: number) {
    return{
        username,
        age
    };
}

const ivan = createUser("ivan", 123);
const pesho = createUser("pesho");

console.log(ivan);
console.log(pesho)


//! Generics
function id<T>(item: T): T {
    return item;
}

const num = id(1);
let num1 = id(1);

const str = id('1');
let prop = id<{prop:string}>({prop: '1'})
let props = id<{prop:string, prop1:number}>({prop: '1', prop1: 1})

interface IMyDto {
    prop: string;
    prop1: number
}

let obj = id<IMyDto>({prop: "ivan", prop1: 22});
let obj1 = id<IMyDto|number>({prop: "ivan", prop1: 22});

type MyType = IMyDto | number;
type BooleanArray = boolean[];

class MyClass implements IMyDto{
    constructor(private name: string, private age: number) {
        this.prop = name;
        this.prop1 = age;
    }

    prop: string;
    prop1: number;
}

const vanko = new MyClass("Vanko", 22);
(ivan as any).age = 1000;
