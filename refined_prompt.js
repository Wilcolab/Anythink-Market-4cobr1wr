/**
 * Converts a string to camelCase.
 *
 * This function takes an input string and converts it to camelCase format.
 * It trims leading and trailing spaces, underscores, or hyphens, splits the string
 * by spaces, underscores, or hyphens, and then concatenates the words such that
 * the first word is in lowercase and each subsequent word starts with an uppercase letter.
 *
 * @param {string} input - The input string to convert.
 * @returns {string} The camelCase formatted string.
 * @throws {Error} Throws an error if the input is not a string.
 *
 * @example
 * toCamelCase("hello world"); // returns "helloWorld"
 * toCamelCase("Make-this_cool"); // returns "makeThisCool"
 */
 
/**
 * Converts a string to dot.case.
 *
 * This function takes an input string and converts it to dot.case format.
 * It trims leading and trailing spaces, underscores, or hyphens, splits the string
 * by spaces, underscores, or hyphens, and then joins the words using dots,
 * converting all characters to lowercase.
 *
 * @param {string} input - The input string to convert.
 * @returns {string} The dot.case formatted string.
 * @throws {Error} Throws an error if the input is not a string.
 *
 * @example
 * toDotCase("hello world"); // returns "hello.world"
 * toDotCase("Make-this_cool"); // returns "make.this.cool"
 */
function toCamelCase(input) {
    if (typeof input !== 'string') {
        throw new Error('Input must be a string.');
    }

    // Trim leading/trailing separators and split by space, underscore, or hyphen
    const words = input
        .trim()
        .replace(/^[\s_-]+|[\s_-]+$/g, '') // Remove leading/trailing separators
        .split(/[\s_-]+/); // Split by one or more separators

    if (words.length === 1 && words[0] === '') return '';

    return words
        .map((word, idx) => {
            if (idx === 0) {
                return word.toLowerCase();
            }
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        })
        .join('');
}

// Example usage:
// console.log(toCamelCase("hello world")); // "helloWorld"
// console.log(toCamelCase("Make-this_cool")); // "makeThisCool"
function toDotCase(input) {
    if (typeof input !== 'string') {
        throw new Error('Input must be a string.');
    }

    // Trim leading/trailing separators and split by space, underscore, or hyphen
    const words = input
        .trim()
        .replace(/^[\s_-]+|[\s_-]+$/g, '') // Remove leading/trailing separators
        .split(/[\s_-]+/); // Split by one or more separators

    if (words.length === 1 && words[0] === '') return '';

    return words
        .map(word => word.toLowerCase())
        .join('.');
}

// Example usage:
// console.log(toDotCase("hello world")); // "hello.world"
// console.log(toDotCase("Make-this_cool")); // "make.this.cool"

