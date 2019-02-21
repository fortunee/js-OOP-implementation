/**
 * Concept of OOP
 * - Abstraction --- Check
 * - Encapsulation --- Encapsulation
 * - Inheritance --- Check
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


/**
 * Class to create a person object.
 */
export class Person {
    constructor(name, age = 0) {
        /**
         * @property {string} name The person's name.
         */
        this.name = name;

        /**
         * @property {number} age The person's age.
         */
        this.age = age;
    }

    /**
     * @property {Function} setName A method to set the person's name.
     * @param {string} name 
     * @returns void
     */
    setName(name) {
        this.name = name;
    }

    /**
     * @property {Function} getName A method to get the person's name.
     * @returns {string}
     */
    getName() {
        return this.name;
    }

    /**
     * @property {Function} setAge A method to set the person's age.
     * @param {number} age 
     * @returns {number}
     */
    setAge(age) {
        this.age = age;
    }

    /**
     * @property {Function} getAge A method to get the person's age.
     * @returns {number}
     */
    getAge() {
        return this.age;
    }
}

/**
 * Class to create a man object.
 */
export class Man extends Person {
    constructor(name, age) {
        super(name, age);

        /**
         * @property {boolean} hasIncome The man's income state.
         */
        this.hasIncome = false;

        /**
         * @property {boolean} isMarried The man's marital status.
         */
        this.isMarried = false;
    }

    /**
     * @property {Function} setIsMarried A method to specify man's marital status.
     * @param {boolean} married 
     */
    setIsMarried(married) {
        this.isMarried = married;
    }

    /**
     * @property {Function} getIsMarried A method to get man's marital status.
     * @returns {boolean}
     */
    getIsMarried() {
        return this.isMarried;
    }

    /**
     * @property {Function} setHasIncome A method to specify man's income.
     * @param {boolean} income 
     */
    setHasIncome(income) {
        this.hasIncome = income;
    }

    /**
     * @property {Function} getHasIncome A method to get man's income state.
     * @returns {boolean}
     */
    getHasIncome() {
        return this.hasIncome;
    }

    /**
     * @property {Function} driveWifeToHospital A method to man's wife to hospital.
     * @param {object} wife
     * @param {object} car
     * @returns {object|string}
     */
    driveWifeToHospital(wife, car) {
        if (this.isMarried && wife.isPregnant && car.owner === this.name) {
            car.drive('Hospital');
            wife.setIsPregnant(false);
            return wife.setIsDelivered(true);
        }
        return  'Cannot drive wife to the hospital, please get wife pregnant';
    }

    /**
     * @property {Function} driveWifeHomeFromHospital A method to man's wife home from the hospital.
     * @param {object} wife
     * @param {object} car
     * @returns {string}
     */
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

    /**
     * @property {Function} buyCar A method to buy a car.
     * @param {string} model
     * @param {string} owner
     * @param {number} ownerAge
     * @returns {object|string}
     */
    buyCar(model, owner = this.name, ownerAge = this.age) {
        if (this.hasIncome && ownerAge >= 15) {
            let newCar = new Car(model);
            newCar.setOwner(owner)
            return newCar;
        }

        return `Can't buy a car`;
    }
}

/**
 * Class to create a wife object.
 */
export class Wife extends Person {
    constructor(name, age) {
        super(name, age);

        /**
         * @property {boolean} isPregnant The woman's pregnant state.
         */
        this.isPregnant = false;

        /**
         * @property {boolean} isDelivered The pregnant womans delivery state.
         */
        this.isDelivered = false;
    }

    /**
     * @property {Function} setIsPregnant A method to specify woman's pregnant state.
     * @param {boolean} pregnant 
     */
    setIsPregnant(pregnant) {
        this.isPregnant = pregnant;
    }

    /**
     * @property {Function} getIsPregnant A method to get woman's pregnant state.
     * @returns {boolean}
     */
    getIsPregnant() {
        return this.isPregnant;
    }

     /**
     * @property {Function} setIsDelivered A method to specify pregnant woman's baby delivery state.
     * @param {boolean} delivered
     * @param {string} babyName
     * @returns {object} 
     */
    setIsDelivered(delivered, babyName = 'unchristened') {
        let newBaby = new Baby(babyName);
        this.isDelivered = delivered;
        return newBaby;
    }

    /**
     * @property {Function} getIsDelivered A method to get pregnant woman's delivery state
     * @returns {boolean}
     */
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
        return `Driving to ${location}`;
    }

    setOwner(name) {
        this.owner = name;
    }
}
