export abstract class Car {

    abstract getNumberOfSets():number;
    abstract getName():string;

}

export class Tesla extends Car {
    private name:string = "Tesla";
    constructor( private numberOfSeats: number ) {super();}

    getNumberOfSets() {
        return this.numberOfSeats;
    }

    getName():string{
        return this.name;
    }
}

export class Audi extends Car {
    private name:string = "Audi";
    constructor( private numberOfSeats: number ) { super(); }

    getNumberOfSets() {
        return this.numberOfSeats;
    }

    getName():string{
        return this.name;
    }
}

export class Toyota extends Car {
    private name:string = "Toyota";
    constructor( private numberOfSeats: number ) { super(); }

    getNumberOfSets() {
        return this.numberOfSeats;
    }

    getName():string{
        return this.name;
    }
}

export class Honda extends Car {
    private name:string = "Honda";
    constructor( private numberOfSeats: number ) { super(); }

    getNumberOfSets() {
        return this.numberOfSeats;
    }

    getName():string{
        return this.name;
    }
}
