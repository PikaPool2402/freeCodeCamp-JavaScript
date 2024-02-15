// The generateSentence(desc, arr) function takes two parameterer: a description & an array.
// It should return a string based upon the description and the array.

// Example 1: If you pass in "largest countries", and ["China", "India", "USA"],
// it should return the string: "The 3 largest countries are China, India, USA"

// Example 2: If you pass in "best fruits", and ["Apples", "Bananas"],
// it should return: "The 2 best fruits are Apples, Bananas"

function generateSentence(desc, arr) {
    baseString = `The ${arr.length} ${desc} are `
    const lastIndex = arr.length - 1

    for (let i = 0; i < arr.length; i++) {
        if (i == lastIndex) {
            baseString += arr[i]
        } else {
            baseString += arr[i] + ", "
        }
    }

    return baseString
}

// pass the argument in the function
console.log( generateSentence("best fruits", ["Apples", "Bananas"]) )