export function reverseString(str) {
    // First we need to create an array based on the split output
    // const reverseArray = str.split('');

    // Now we have an array and we can reverse it
    // const revertedArray = reverseArray.reverse()

    // We need to turn back to a string and return it
    // const myString  = revertedArray.join('')
    
    // return myString

    return str.split('').reverse().join('')
}

export function isPalindrome(string) {
    const reversed = string.split('').reverse().join('');
    return string === reversed;
}

export function containsSubstring(string, substring) {
    return string.includes(substring);
}

export function stringToNumber(string, onlyCheck) {
    const number = Number(string);
    if (onlyCheck) {
        return !isNaN(number);
    }
    return isNaN(number) ? null : number;
}

export function replaceFirstOccurrence(string, substring, replacement) {
    return string.replace(substring, replacement);
}

export function replaceAllOccurrences(string, substring, replacement) {
    return string.split(substring).join(replacement);
}

export function transformString(string, toLower) {
    return toLower ? string.toLowerCase() : string.toUpperCase();}

export function capitalizeWord(string) {
    return string.replace(/\b\w/g, char => char.toUpperCase());

}