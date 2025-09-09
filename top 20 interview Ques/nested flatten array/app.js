function flattenArray (arr) {
    let result = []

    function helper (subArr) {
        for (let i=0; i<subArr.length; i++) {
            if (Array.isArray(subArr[i])) {
                helper(subArr[i])
            }
            else {
                result[result.length] = subArr[i]
            }
        }
    }
    helper(arr);
    return result;
}

console.log(flattenArray([1, [2, [3, [4]], 5]]));