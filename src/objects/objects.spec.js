import { describe, it, expect } from 'vitest'
import {
    getProperties,
    getValues,
    getEntries,
    addProperty,
    countProperties,
    removeProperty,
    createPeople,
    updateAge,
    addMethod,
} from './index';

const person = {
    name: 'Lenny',
    age: 20,
    city: 'Zürich'
}


describe('Objects exercises', () => {
    it('should return the list of all properties of an object', () => {
        expect(getProperties(person)).toEqual(['name', 'age', 'city'])
    })

    it('should return the list of all values of an object', () => {
        expect(getValues(person)).toEqual(['Lenny', 20, 'Zürich'])
    })

    it('should return the list of all entries of an object', () => {
        expect(getEntries(person)).toEqual([['name', 'Lenny'], ['age', 20], ['city', 'Zürich']])
    })

    it('should create a new object based on person, with the same properties and values but with a new property', () => {
        const copy = addProperty(person, 'country', 'Switzerland')
        expect(copy).toEqual({
            name: 'Lenny',
            age: 20,
            city: 'Zürich',
            country: 'Switzerland'
        })
        expect(copy).not.toBe(person)
    })

    it('should return the number of properties of an object', () => {
        expect(countProperties(person)).toBe(3)
    })

    it('should remove a property from an object', () => {
        const copy = addProperty(person, 'country', 'Switzerland')
        removeProperty(copy, 'age')

        expect(copy).not.toHaveProperty('age')
        expect(countProperties(copy)).toBe(3)

        expect(person).toHaveProperty('age')
        expect(countProperties(person)).toBe(3)

        removeProperty(person, 'age')
        expect(person).not.toHaveProperty('age')
        expect(countProperties(person)).toBe(2)
    })

    it('should create an array of objects based on the given object', () => {
        const people = createPeople(person, 3);
        expect(people).toEqual([
            { name: 'Lenny', age: 20, city: 'Zürich' },
            { name: 'Lenny', age: 20, city: 'Zürich' },
            { name: 'Lenny', age: 20, city: 'Zürich' }
        ]);
    });

    it('should update the age of a person', () => {
        const newAge = 18;
        const updatedPerson = updateAge(person, newAge)
        expect(updatedPerson).toEqual({
            name: 'Lenny',
            age: newAge,
            city: 'Zürich'
        })
        expect(typeof updatedPerson.age).toBe('number')
    })

    it('should add a method to the person object', () => {
        const method = function() {
            return `Hello, my name is ${this.name}`;
        };
        addMethod(person, 'greet', method);

        expect(person.greet()).toBe('Hello, my name is Lenny');
    });
})