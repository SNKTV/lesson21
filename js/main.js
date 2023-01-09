// Завдання 1

const car = {
    modal: 'Ford',
    year: 2014,
    color: 'white',
}
car.color = 'greey'
car.electric = 'No'

car.signal = function(){
    alert('fa! fa!');
} 

console.log(car);
car.signal();

// Завдання 2

const salaries = {
    fronted: 12000,
    backend: 10000,
    designer: 8000,

    dayPay() {
        alert('We must pay salary on Tuesday!');
    },
    total() {
        let sum = 0;
        for (const key in salaries) {
            if (+(this[key])) {
                sum += this[key];
            }
         
        }

        console.log(sum);
    }      
}
salaries.manager = 5000;
console.log(salaries);
salaries.total();


// Завдання 3-4

function Manufacturer(brand, system, cost){
    this.brand = brand;
    this.system = system;
    this.cost = cost;
    this[Symbol.toPrimitive] = function (hint){
        switch(hint){
            case 'string':
                return this.brand
            case 'string':
                return this.system
            case 'number':
                return this.cost
            case 'default':
                return `${this.brand} ${this.system} ${this.cost} //`
                
        }
    }
}

const dell = new Manufacturer('Dell', 'windows', 800);
const apple = new Manufacturer('Apple', 'MAC OS', 1700);

console.log(String(dell));
console.log(+apple);
console.log(dell + apple);