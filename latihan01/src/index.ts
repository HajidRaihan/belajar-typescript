let say :number= 10;


function sum (a:number, b:number):number {
    return a + b
}

console.log(sum(2, 3));


const mobil:{merk: string, price: number} = {
    merk: "toyota",
    price: 100
}

// type data primitif

// type data number
let x: number;
x = 10; //nilangan bulat
x = 3.14; //bilangan desimal
x = 0b1010; //bilangan biner
x = 0o12; //bilangan octal
x = 0x12; //bilangan hexadecimal

// type data string
let y: string;
y = "Hello World";
y = "Hello World";
y = `Hello World${x}`;

// type data boolean
let z: boolean;
z = true;
z = false;

// bigint khusus untuk ES2020 keatas
let big: bigint;
big = 100n;

// symbol
let symbol: symbol;
symbol = Symbol("Hello World");

// null
let nul: null;
nul = null;

// undefined
let und: undefined;
und = undefined;

let nik: string = "nik001";
let namaLengkap: string = "Nikolaus";
let indexLembur: number = 160;
let basicSalary: number = 100000;

let uangLembur: number = (indexLembur / 173) * basicSalary;

console.log("NIk = " + nik);
console.log("Nama Lengkap = " + namaLengkap);
console.log("Index Lembur = " + indexLembur);
console.log("Basic Salary = " + basicSalary);
console.log("Uang Lembur = " + uangLembur.toLocaleString("id-ID"));

console.log(mobil.price);

// OOP

class Animal {
    name: string;
    age: number;

    constructor(name:string, age: number) {
        this.name = name,
        this.age = age

    }

    showInfo() {
        console.log(`Saya adalah ${this.name} dengan umur ${this.age}`)
    }
}

const animal = new Animal("lion", 13);
animal.showInfo()

class Dog extends Animal {
    breed: string;
    constructor(name: string, age: number, breed: string ) {
        super(name, age)
        this.breed = breed
    }

    showInfoDog(): void {
        super.showInfo()
        console.log(`My bread is ${this.breed}`)
    }
}

const dog = new Dog("max", 10, "husky" )
dog.showInfoDog()