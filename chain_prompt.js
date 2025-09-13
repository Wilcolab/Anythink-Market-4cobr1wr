function toKebabCase(input) {
    if (input === null || input === undefined) {
        throw new Error('Input cannot be null or undefined');
    }
    if (typeof input !== 'string') {
        throw new Error('Input must be a string');
    }
    if (input.trim() === '') {
        return '';
    }

    // Insert hyphens before camelCase boundaries
    let str = input.replace(/([a-z0-9])([A-Z])/g, '$1-$2');
    // Replace underscores and spaces with hyphens
    str = str.replace(/[_\s]+/g, '-');
    // Convert to lowercase
    str = str.toLowerCase();
    // Collapse multiple hyphens into one
    str = str.replace(/-+/g, '-');
    // Trim leading/trailing hyphens
    str = str.replace(/^-+|-+$/g, '');

    return str;
}

// Example usage:
// console.log(toKebabCase("Hello World")); // "hello-world"
// console.log(toKebabCase("makeThis_cool")); // "make-this-cool"