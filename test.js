import chai from 'chai';
import sinon from 'sinon';

const expect = chai.expect;

import { Person, Man, Wife, Baby, Car } from './index';

describe('Person', function () {
    let newPerson;

    before(function() {
        newPerson = new Person('John Doe', 27);
    })
    
    it('Should have a name', function () {
        expect(newPerson.name).to.equal('John Doe');
    });

    it('Should have an age', function () {
        expect(newPerson.age).to.equal(27);
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
        man.setHasIncome(true);
        expect(man.getHasIncome()).to.be.true;
    });

    it('Should be able to buy himself a car', function () {
        const benz = man.buyCar('benz');
        expect(benz.owner).to.equal(man.name);
    });

    it('Should be able to get married', function () {
        man.setIsMarried(true);
        expect(man.getIsMarried()).to.be.true;
    });

    it('Should be able to drive wife to the hospital', function () {
        const wife = new Wife('Sarah Doe', 25);
        wife.setIsPregnant(true);
        const benz = man.buyCar('benz');
        man.driveWifeToHospital(wife, benz);
        expect(wife.getIsDelivered()).to.be.true;
        expect(wife.getIsPregnant()).to.be.false;
    });

    it('Should be able to drive wife home from the hospital', function () {
        const wife = new Wife('Sarah Doe', 25);
        man.setIsMarried(true);
        wife.setIsDelivered(true)
        const benz = man.buyCar('benz');
        
        expect(man.driveWifeHomeFromHospital(wife, benz)).to.equal('Driving to Home')
    });

    it('Should be able to buy his wife a car', function () {
        const wife = new Wife('Sarah Doe', 25);
        const wifeCar = man.buyCar('BMW', wife.name, wife.age);
        expect(wifeCar.owner).to.equal(wife.getName());
    });
    
    it('Should be able to buy his child a car', function () {
        const baby = new Baby('Duke Doe');
        baby.setAge(15);
        const toyota = man.buyCar('Toyota', baby.name, baby.age);
        expect(toyota.owner).to.equal(baby.getName());
    });
});

describe('Wife', function() {
    let wife;
    before(function() {
        wife = new Wife('Sarah Doe', 26);
    });

    it('Should be able to get pregnant', function () {
        wife.setIsPregnant(true)
        expect(wife.getIsPregnant()).to.be.true;
    });

    it('Should be able to bear a child', function () {
        const newBaby = wife.setIsDelivered(true, 'Chris Doe');
        expect(wife.getIsDelivered()).to.be.true;
        expect(newBaby.getName()).to.equal('Chris Doe');
    });
});

describe('Baby', function() {
    it('Should be able to celebrate birthdays', function() {
        const baby = new Baby('Chris Doe');
        baby.celebrateBirthday();
        expect(baby.getAge()).to.equal(1);
    });
});

describe('Car', function() {
    let car;

    before(function() {
        car = new Car('Sienna');
        car.setOwner('Mavin')
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
