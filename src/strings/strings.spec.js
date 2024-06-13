import { describe, it, expect } from 'vitest'
import {
    reverseString,
    isPalindrome,
    containsSubstring,
    stringToNumber,
    replaceFirstOccurrence,
    replaceAllOccurrences,
    transformString,
    capitalizeWord,
} from './index'


describe('strings exercises', () => {
    it('should reverse a string', () => {
        expect(reverseString('hello')).toBe('olleh')
    })

    it('should check if a string is a palindrome', () => {
        expect(isPalindrome('hello')).toBe(false)
        expect(isPalindrome('racecar')).toBe(true)
    })

    it('should check if a string contains a substring', () => {
        expect(containsSubstring('hello', 'ell')).toBe(true)
        expect(containsSubstring('hello', 'world')).toBe(false)
    })

    it('should ONLY check if a string can be converted to a number', () => {
        expect(stringToNumber('123', true)).toBe(true)
        expect(stringToNumber('abc', true)).toBe(false)
    })

    it('should transform a string to a number', () => {
        expect(stringToNumber('123')).toBe(123)
        expect(stringToNumber('abc')).toBe(null)
    })

    it('should replace the first occurrence of a substring', () => {
        expect(replaceFirstOccurrence('hello world', 'world', 'universe')).toBe('hello universe')
    })

    it('should replace all the occurrences of a substring', () => {
        expect(replaceAllOccurrences('hello world', 'o', 'a')).toBe('hella warld')
    })

    it('should convert a string to UPPERCASE', () => {
        expect(transformString('hello world')).toBe('HELLO WORLD')
    })

    it('should convert a string to UPPERCASE', () => {
        expect(transformString('HELLO WORLD', true)).toBe('hello world')
    })

    it('should capitalize the first letter of each word in a string', () => {
        expect(capitalizeWord('hello world')).toBe('Hello World')
    })
})