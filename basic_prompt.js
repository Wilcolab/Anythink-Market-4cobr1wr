function toCamelCase(str) {
    return str
        .split(/[\s_-]+/)
        .map((word, idx) => {
            if (idx === 0) return word.toLowerCase();
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        })
        .join('');
}

// Example usage:
// console.log(toCamelCase('hello_world-test string')); // "helloWorldTestString"