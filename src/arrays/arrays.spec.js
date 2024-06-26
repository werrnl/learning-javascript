import { describe, it, expect } from 'vitest'

const fruits = ['apple', 'banana', 'cherry', 'strawberry']
const numbers = [1, 2, 3, 4, 5]
const people = [
    { name: 'Alice', age: 22 },
    { name: 'Bob', age: 32 },
    { name: 'Charlie', age: 30 },
    { name: 'David', age: 35 },
    { name: 'Eve', age: 60 },
    { name: 'Daniel', age: 50 },
    { name: 'Lenny', age: 55 },
]

describe('Arrays exercises', () => {
    it('should return the last element of an array', () => {
        expect(getLastElement(fruits)).toBe('strawberry')
        expect(getLastElement(numbers)).toBe(5)
        expect(getLastElement([])).toBeUndefined()
    })

    it('should return the second last element of an array', () => {
        expect(getSecondLastElement(fruits)).toBe('cherry')
        expect(getSecondLastElement(numbers)).toBe(4)
        expect(getSecondLastElement([])).toBeUndefined()
    })

    it('should remove the last element of an array', () => {
        const array = removeLastElement(fruits)
        expect(array).toEqual(['apple', 'banana', 'cherry'])
        expect(array).not.toBe(fruits)
        expect(fruits).toHaveLength(4)

        const copy2 = removeLastElement([])
        expect(copy2).toEqual([])
    })

    it('should remove the first element of an array', () => {
        const array = removeFirstElement(fruits)
        expect(array).toEqual(['banana', 'cherry', 'strawberry'])
        expect(array).not.toBe(fruits)
        expect(fruits).toHaveLength(4)

        const copy2 = removeFirstElement([])
        expect(copy2).toEqual([])
    })

    it('should add a new element to the end of an array', () => {
        const array = addElement(fruits, 'kiwi')
        expect(array).toEqual(['apple', 'banana', 'cherry', 'strawberry', 'kiwi'])
        expect(array).toHaveLength(5)
        expect(array).not.toBe(fruits)
        expect(fruits).toHaveLength(4)
    })

    it('should add a new element in a specific position of an array', () => {
        const array = addElementAt(fruits, 'kiwi', 1)
        expect(array).toEqual(['apple', 'kiwi', 'banana', 'cherry', 'strawberry'])
        expect(array).toHaveLength(5)
        expect(array).not.toBe(fruits)
        expect(fruits).toHaveLength(4)
    })

    it('should remove an element from a specific position of an array', () => {
        const array = removeElementAt(fruits, 1)
        expect(array).toEqual(['apple', 'cherry', 'strawberry'])
        expect(array).not.toBe(fruits)
        expect(fruits).toHaveLength(4)
    })

    it('should check if all elements of an array are numbers', () => {
        expect(areAllNumbers(numbers)).toBe(true)
        expect(areAllNumbers(fruits)).toBe(false)
        expect(areAllNumbers([1, 2, '3'])).toBe(false)
    })

    it('should check that at least one element of an array is a number', () => {
        expect(hasAtLeastOneNumber(numbers)).toBe(true)
        expect(hasAtLeastOneNumber(fruits)).toBe(false)
        expect(hasAtLeastOneNumber(['1', '2', '3'])).toBe(false)
        expect(hasAtLeastOneNumber([1, 2, '3'])).toBe(true)
    })

    it('should return the sum of all numbers in an array', () => {
        expect(sumAllNumbers(numbers)).toBe(15)
        expect(sumAllNumbers(fruits)).toBe(null)
    })

    it('should add a new key-value pair to each object in an array', () => {
        const updatedPeople = addPropertyToPeople(people, 'city', 'Zürich')
        expect(updatedPeople).toEqual([
            { name: 'Alice', age: 22, city: 'Zürich', index: 0 },
            { name: 'Bob', age: 32, city: 'Zürich', index: 1 },
            { name: 'Charlie', age: 30, city: 'Zürich', index: 2 },
            { name: 'David', age: 35, city: 'Zürich', index: 3 },
            { name: 'Eve', age: 60, city: 'Zürich', index: 4 },
            { name: 'Daniel', age: 50, city: 'Zürich', index: 5 },
            { name: 'Lenny', age: 55, city: 'Zürich', index: 6 },
        ])
        expect(updatedPeople).not.toBe(people)
    })

    it('should flatten an array of arrays', () => {
        const array = [[1, 2], [3, 4], [5, 6]]
        expect(flattenArray(array)).toEqual([1, 2, 3, 4, 5, 6])
    })

    it('should if an array contains a specific element', () => {
        expect(containsElement(fruits, 'banana')).toBe(true)
        expect(containsElement(fruits, 'kiwi')).toBe(false)

        const array = ['apple', 'banana', ['cherry', 'strawberry']]
        expect(containsElement(array, 'cherry')).toBe(true)
        expect(containsElement(array, 'banana')).toBe(true)
        expect(containsElement(array, 'pineapple')).toBe(false)
    })

    it('should return the index of a specific element in an array', () => {
        expect(indexOfElement(fruits, 'banana')).toBe(1)
        expect(indexOfElement(fruits, 'kiwi')).toBe(-1)
    })

    it('should filter all the peopley that are older than....', () => {
        const filteredPeople = filterPeople(people, age, 40)
        expect(filteredPeople).toHaveLength(3)

        const names = filteredPeople(people, name, 'Eve')
        expect(names).toHaveLength(1)
    })

    it('should return the first elements that match the condition', () => {
        const person = findPerson(people, name, 'Eve')
        expect(person).toEqual({ name: 'Eve', age: 60 })
    })

    it('should return the first person that is older than...', () => {
        const person = findPersonOlderThan(people, 30)
        expect(person).toEqual({ name: 'Bob', age: 32 })
    })

    it('should return the last person that is older than...', () => {
        const person = findLastPersonOlderThan(people, 40)
        expect(person).toEqual({ name: 'Eve', age: 60 })
    })

    it('should convert and array of strings and combine them', () => {
        expect(combineStrings(fruits)).toBe('apple-banana-cherry-strawberry')
    })

    it('should sort an array of numbers in ascending order', () => {
        const array = [5, 3, 1, 4, 2]
        expect(sortNumbers(array)).toEqual([1, 2, 3, 4, 5])

        const date1 = new Date('2021-01-01')
        const date2 = new Date('2020-01-01')
        const date3 = new Date('2022-01-01')
        const dates = [date1, date2, date3]
        expect(sortNumbers(dates)).toEqual([date2, date1, date3])

        const months = ['March', 'January', 'February']
        expect(sortNumbers(months)).toEqual(['February', 'January', 'March'])

        const numbersTest = [1, 10000, 21, 30, 4]
        expect(sortNumbers(numbersTest)).toEqual([1, 4, 21, 30, 10000])
    })
})