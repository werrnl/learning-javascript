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
    addMethod
} from './index'

const person = {
    name: 'Lenny',
    age: 20,
    city: 'Zürich'
}


describe('Objects exercises', () => {
    it.todo('should return the list of all properties of an object', () => {
        expect(getProperties(person)).toEqual(['name', 'age', 'city'])
    })

    it.todo('should return the list of all values of an object', () => {
        expect(getValues(person)).toEqual(['Lenny', 20, 'Zürich'])
    })

    it.todo('should return the list of all entries of an object', () => {
        expect(getEntries(person)).toEqual([['name', 'Lenny'], ['age', 20], ['city', 'Zürich']])
    })

    it.todo('should create a new object based on person, with the same properties and values but with a new property', () => {
        const copy = addProperty(person, 'country', 'Switzerland')
        expect(copy).toEqual({
            name: 'Lenny',
            age: 20,
            city: 'Zürich',
            country: 'Switzerland'
        })
        expect(copy).not.toBe(person)
    })

    it.todo('should return the number of properties of an object', () => {
        expect(countProperties(person)).toBe(3)
    })

    it.todo('should remove a property from an object', () => {
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

    it.todo('should create an array of objects based on the given object', () => {
        const people = createPeople(person, 3)
        expect(people).toEqual([
            { name: 'Lenny', age: 20, city: 'Zürich' },
            { name: 'Lenny', age: 20, city: 'Zürich' },
            { name: 'Lenny', age: 20, city: 'Zürich' }
        ])
    })

    it.todo('should update the age of a person', () => {
        // Enter your age here`
        const newAge = null
        const updatedPerson = updateAge(person, newAge)
        expect(updatedPerson).toEqual({
            name: 'Lenny',
            age: newAge,
            city: 'Zürich'
        })
        expect(typeof updatedPerson.age).toBe('number')
    })

    it.todo('should add a method to the person object', () => {
        // Enter the method implementation here
        const method = null
        addMethod(person, 'greet', method)

        expect(person.greet()).toBe('Hello, my name is Lenny')
    })
})