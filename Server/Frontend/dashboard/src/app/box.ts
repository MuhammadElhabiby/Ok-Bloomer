export class Box{
    constructor(private name: String, private id: number, private plant: string){}

    getName(){
        return this.name;
    }

    getId(){
        return this.id;
    }

    getPlant(){
        return this.plant;
    }
}