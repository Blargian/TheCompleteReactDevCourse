
class Person {
    constructor(name = 'Anonymous',age){
        this.name = name;
        this.age = age;
    }

    getGreeting(){
        return `Hello ${this.name}`;
    }

    getDescription(){
        return `${this.name} is ${this.age} years old`
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name,age);
        this.major = major
    }

    hasMajor() {
        return !!this.major; //if true make false make true, if false make true make false
    }

    getDescription() {
        let description = super.getDescription();
        console.log(description)
        
        if (this.hasMajor()){
            description += `. Their major is ${this.major}`;
        }

        return description;
    }
}

class Traveller extends Person {
    constructor(name,age,homeLocation){
        super(name,age);
        this.homeLocation = homeLocation;
    }

    getDescription(){
        if(this.homeLocation){
            return `Hi. I am ${this.name}. I'm visiting from ${this.homeLocation}`;
        }
       
    }
}

const me = new Person('Shaun Struwig',26, 'Electronic Engineering');
console.log(me.getGreeting());

const you = new Student('Andrew Mead',27, 'Computer Science');
console.log(you.getDescription());

const traveller = new Traveller('Richard',23,'Japan');
console.log(traveller.getDescription())