const removeFromArray = function(array, ...itemsToRemove) {
        let remainArr = array
        .filter((item) => !itemsToRemove.includes(item));
        return remainArr;
};

// Do not edit below this line
module.exports = removeFromArray;
