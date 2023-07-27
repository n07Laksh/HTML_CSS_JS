// console.log("Class Exercise")

// function Class(value1,value2,value3){
//     this.name = value1;
//     this.surname = value2;
//     this.village = value3;
//     this.FullAddre = function(){
//         console.log(`${this.name} ${this.surname} ${this.village}`)
        
//     }
    
// }
// Class.prototype.FullAddr = function(){
//     return `${this.name} + ${this.surname} + ${this.village}`
// }

// const clas = new Class("Laksh","Nishad","Saraipali")
// // console.log(clas)
// console.log(clas.FullAddr())
// setInterval(clas.FullAddre(),3000)


// workint on class
class Car {
    constructor(name,id,model,price,color){
        this.name = name;
        this.id = id;
        this.model = model;
        this.price = price;
        this.color = color;
    }
    getCarAge(){
            let date = new Date();
            return date.getFullYear() - this.model;
    }
    getDiscount(discount){
            return this.price-((discount/100)*this.price);
    }
    present(){
        return `Hello this is a ${this.name} car `
    }
    static carDetails(x){
            return `This car is ${x.color} color and 4 seater and petrol engine fastest as 150km per hour`;
    }

}

Car.prototype.weight = function(weight){
        return this.weight = weight;
}
class SecCar extends Car{
    constructor(name,id,model){
        super(name,id,model)

    }
    show(){
        return this.present() + " " + this.name;//return hello this is a Lambo car Lambo
        return car.present() + " " + this.name; // return Hello this is a Thar car Lambo
    }
}

const car = new Car("Thar",1223,2000,20000000,"black");
const secCar = new SecCar("Lambo",23+"-toy",2020,200,"red");
console.log(car)
document.writeln(secCar.show())
car.getCarAge();
let carAge = car.getCarAge();
let discount = car.getDiscount(23);
console.log("Car age is " + carAge)
console.log("Discount of this product is " + discount);
console.log(Car.carDetails(car));

console.log(car.weight(400+"kg"));