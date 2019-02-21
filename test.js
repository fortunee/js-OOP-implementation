import chai from 'chai';
const expect = chai.expect;

import { Person } from './index';

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
    it('Should be able to make income', function () {
        expect(false).to.be.true;
    });

    it('Should be able to buy himself a car', function () {
        expect(false).to.be.true;
    });

    it('Should be able to get married', function () {
        expect(false).to.be.true;
    });

    it('Should be able to drive wife to the hospital', function () {
        expect(false).to.be.true;
    });

    it('Should be able to drive wife home from the hospital', function () {
        expect(false).to.be.true;
    });

    it('Should be able to buy his wife a car', function () {
        expect(false).to.be.true;
    });
    
    it('Should be able to buy his child a car', function () {
        expect(false).to.be.true;
    });
});

describe('Wife', function() {
    it('Should be able to get pregnant', function () {
        expect(false).to.be.true;
    });

    it('Should be able to bear a child', function () {
        expect(false).to.be.true;
    });
});

describe('Baby', function() {
    it('Should be able to celebrate birthdays', function() {
        expect(false).to.be.true;
    });
});

describe('Car', function() {
    it('Should have a model', function() {
        expect(false).to.be.true;
    });

    it('Should have an owner', function() {
        expect(false).to.be.true;
    });

    it('Should be driven', function() {
        expect(false).to.be.true;
    });
});
