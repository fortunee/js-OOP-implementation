import chai from 'chai';

const expect = chai.expect;

import { Person, Man, Wife, Baby, Car } from './index';

describe('Person', function () {
    let newPerson;

    before(function() {
        newPerson = new Person('John Doe', 27);
    })
    
    it('Should have a name', function () {
        expect(newPerson.getName()).to.equal('John Doe');
    });

    it('Should have an age', function () {
        expect(newPerson.getAge()).to.equal(27);
    });

    it('Should be able to set a name', function () {
        newPerson.setName('Daniel');
        expect(newPerson.getName()).to.equal('Daniel');
    });

    it('Should be able to set an age', function () {
        newPerson.setAge(30);
        expect(newPerson.getAge()).to.equal(30);
    });
});

describe('Man', function () {
    let man;

    before(function() {
        man = new Man('John Doe', 27);
    })

    it('Should be able to make income', function () {
        expect(man.getHasIncome()).to.be.false;
        man.setHasIncome(true);
        expect(man.getHasIncome()).to.be.true;
    });

    it('Should be able to buy himself a car', function () {
        man.setHasIncome(false);
        expect(man.buyCar('benz')).to.equal(`Can't buy a car`);
        man.setHasIncome(true);
        const benz = man.buyCar('benz');
        expect(benz.owner).to.equal(man.name);
    });

    it('Should be able to get married', function () {
        expect(man.getIsMarried()).to.be.false;
        man.setIsMarried(true);
        expect(man.getIsMarried()).to.be.true;
    });

    it('Should be able to drive pregnant wife to the hospital', function () {
        const wife = new Wife('Jane Doe', 25);
        const benz = man.buyCar('benz');
        expect(wife.getIsPregnant()).to.be.false;
        expect(man.driveWifeToHospital(wife, benz))
            .to.equal('Cannot drive wife to the hospital, please get wife pregnant');
        
        wife.setIsPregnant(true);
        expect(wife.getIsPregnant()).to.be.true;
        man.driveWifeToHospital(wife, benz);
        expect(wife.getIsDelivered()).to.be.true;
        expect(wife.getIsPregnant()).to.be.false;
    });

    it('Should be able to drive NOT pregnant wife home from the hospital', function () {
        const wife = new Wife('Jane Doe', 25);
        man.setIsMarried(true);
        wife.setIsDelivered(true)
        const benz = man.buyCar('benz');
        expect(man.driveWifeHomeFromHospital(wife, benz)).to.equal('Driving to Home')
    });

    it('Should be able to buy his wife a car', function () {
        const wife = new Wife('Jane Doe', 25);
        const wifeCar = man.buyCar('BMW', wife.name, wife.age);
        expect(wifeCar.owner).to.equal(wife.getName());
    });
    
    it('Should be able to buy his child a car', function () {
        const baby = new Baby('Duke Doe');
        expect(baby.getAge()).to.equal(0);
        expect(man.buyCar('Toyota', baby.name, baby.age)).to.equal(`Can't buy a car`);
        baby.setAge(15);
        const toyota = man.buyCar('Toyota', baby.name, baby.age);
        expect(toyota.owner).to.equal(baby.getName());
    });
});

describe('Wife', function() {
    let wife;
    before(function() {
        wife = new Wife('Jane Doe', 26);
    });

    it('Should be able to get pregnant', function () {
        expect(wife.getIsPregnant()).to.be.false;
        wife.setIsPregnant(true)
        expect(wife.getIsPregnant()).to.be.true;
    });

    it('Should be able to bear a child', function () {
        expect(wife.getIsDelivered()).to.be.false;
        const newBaby = wife.setIsDelivered(true, 'Chris Doe');
        expect(wife.getIsDelivered()).to.be.true;
        expect(newBaby.getName()).to.equal('Chris Doe');
    });
});

describe('Baby', function() {
    let baby;
    
    before(function () {
        baby = new Baby('Chris Doe');
    });

    it('should create a baby', function() {
        expect(baby.getName()).to.equal('Chris Doe');
        expect(baby.getAge()).to.equal(0);
    });

    it('Should be able to celebrate birthdays', function() {
        baby.celebrateBirthday();
        expect(baby.getAge()).to.equal(1);
        baby.celebrateBirthday();
        expect(baby.getAge()).to.equal(2);
    });
});

describe('Car', function() {
    let car;

    before(function() {
        car = new Car('Sienna');
        car.setOwner('Mavin');
    });

    it('Should have a model', function() {
        expect(car.model).to.equal('Sienna');
    });

    it('Should have an owner', function() {
        expect(car.owner).to.equal('Mavin');
    });

    it('Should be driven', function() {
        expect(car.drive('church')).to.equal('Driving to church');
    });
});
