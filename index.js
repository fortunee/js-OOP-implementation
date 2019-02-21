/**
 * Concept of OOP
 * - Abstraction
 * - Encapsulation
 * - Inheritance
 * - Polymorphism
 * 
 * SOLID principles of OOP
 * - Single responsility
 * - Open Closed
 * - Liskov substitution
 * - Interface segregation
 * - Dependency inversion
 * 
 * 
 * Scenario
 * A man makes an income, buys himself a car, gets married and when the wife gets
 * pregnant and is about to have a baby, the man drives wife to the hospital and
 * she delivers and he drives wife back home. Then, the man buys his wife a car
 * and on the baby's 15th birthday, man buys the baby a car
 */

export class Person {
    constructor(name, age = 0) {
        this.name = name;
        this.age = age;
    }

    setName(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }

    setAge(age) {
        this.age = age;
    }

    getAge() {
        return this.age;
    }
}

export class Man extends Person {
    constructor(name, age) {
        super(name, age);

        this.hasIncome = false;
        this.isMarried = false;
    }

    setIsMarried(married) {
        this.isMarried = married;
    }

    getIsMarried() {
        return this.isMarried;
    }

    setHasIncome(income) {
        this.hasIncome = income;
    }

    getHasIncome() {
        return this.hasIncome;
    }

    driveWifeToHospital(wife, car) {
        if (this.isMarried && wife.isPregnant && car.owner === this.name) {
            car.drive('Hospital');
            wife.setIsPregnant(false);
            return wife.setIsDelivered(true);
        }
        return console.log('Cannot drive wife to the hospital...')
    }

    driveWifeHomeFromHospital(wife, car) {
        if (
            this.isMarried &&
            !wife.isPregnant &&
            wife.isDelivered &&
            car.owner === this.name
        ) {
            return car.drive('Home');
        } else {
            return 'Cannot drive wife home...'
        }
    }

    buyCar(model, owner = this.name, ownerAge = this.age) {
        if (this.hasIncome && ownerAge >= 15) {
            let newCar = new Car(model);
            newCar.setOwner(owner)
            return newCar;
        }

        return `can't buy a car for baby cos he's below 15`;
    }
}

export class Wife extends Person {
    constructor(name, age) {
        super(name, age);
        this.isPregnant = false;
        this.isDelivered = false;
    }

    setIsPregnant(pregnant) {
        this.isPregnant = pregnant;
    }

    getIsPregnant() {
        return this.isPregnant;
    }

    setIsDelivered(delivered, babyName = 'unchristened') {
        let newBaby = new Baby(babyName);
        this.isDelivered = delivered;
        return newBaby;
    }

    getIsDelivered() {
        return this.isDelivered;
    }
}

export class Baby extends Person {
    constructor(name) {
        super(name);
    }

    celebrateBirthday() {
        this.setAge(this.age + 1);
    }
}

export class Car {
    constructor(model) {
        this.model = model;
        this.owner = '';
    }

    drive(location) {
        return `Driving to the ${location}`;
    }

    setOwner(name) {
        this.owner = name;
    }
}
