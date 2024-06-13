import { describe, it, expect } from 'vitest'
import {
    sumNumbers,
    isEven,
    isOdd,
    absoluteValue,
    maxNumber,
    minNumber,
} from './index'

describe('Numbers', () => {
    it('should add two numbers', () => {
        expect(sumNumbers(1 + 1)).toBe(2)
        expect(sumNumbers(2 + 2)).toBe(4)
    })

    it('should add two decimal numbers and round the result', () => {
        expect(sumNumbers(1.1 + 1.1)).toBe(2)
        expect(sumNumbers(2.3 + 2.3)).toBe(5)
    })

    it('should return if a number is even', () => {
        expect(isEven(2)).toBe(true)
        expect(isEven(3)).toBe(false)
    })

    it('should return if a number is odd', () => {
        expect(isOdd(2)).toBe(false)
        expect(isOdd(3)).toBe(true)
    })

    it('should return the absolute value of a number', () => {
        expect(absoluteValue(-1)).toBe(1)
        expect(absoluteValue(1)).toBe(1)
    })

    it('should return the maximum number of a list', () => {
        expect(maxNumber([1, 5])).toBe(5)
        expect(maxNumber([6, 2, 8])).toBe(8)
        expect(maxNumber([1, 1, 1])).toBe(1)
    })

    it('should return the minimum number of a list', () => {
        expect(minNumber([1, 5])).toBe(1)
        expect(minNumber([6, 2, 8])).toBe(2)
        expect(minNumber([1, 1, 1])).toBe(1)
    })
})