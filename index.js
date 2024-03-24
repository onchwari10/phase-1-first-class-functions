// Function that receives a callback function and calls it
function receivesAFunction(callback) {
    callback();
}

// Function that returns a named function
function returnsANamedFunction() {
    return function namedFunction() {
        // Body of the named function
    };
}

// Function that returns an anonymous function
function returnsAnAnonymousFunction() {
    return function() {
        // Body of the anonymous function
    };
}

// Exporting functions
module.exports = {
    receivesAFunction,
    returnsANamedFunction,
    returnsAnAnonymousFunction
};
