//encadenamiento opcional

export interface Passenger{
    name:string;
    childrens?:string[];
}

const passenger1: Passenger = {
    name: 'Rolando',
}

const passenger2: Passenger = {
    name: 'tubac',
    childrens: ['natalia', 'Elizabeth']
}

//opcional chaining 
const printChildren = (passenger: Passenger) => {
    const howManyChildren = passenger.childrens?.length || 0;
    console.log(passenger.name, howManyChildren);
}

printChildren(passenger1);
printChildren(passenger2);