/**
 * Splits words by space/tabs/new line and returns an array
 * @param {string} data  - string
 */

export const splitWords = data => {
    const words = data.split(/\s+/); // split by spaces, tabs and new line
    return words;
};

/**
 * count ocuurance of each element in array
 * @param {array} array  - array of elements
 */
export const countWords = array => {
    let result = [];
    array.forEach(word => {
        // check if word exsist then increment else set count 1
        result.hasOwnProperty(word) ? result[word]++ : (result[word] = 1);
    });

    return result;
};

/**
 *  sort array by element count
 * @param {array} array  - array
 */
export const sortByCount = array => {
    let result = [];
    // get keys array and format in a jason object array
    result = Object.keys(array).map(key => {
        return {
            word: key,
            occurance: array[key],
        };
    });
    // sort by occurance
    result.sort((a, b) => {
        return b.occurance - a.occurance;
    });
    return result;
};
