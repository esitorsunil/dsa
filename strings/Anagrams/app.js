function anagrams(strs) {
    let map = {}

    for(let i=0; i<strs.length; i++) {
        let sortedArr = strs[i].split("").sort().join("")

        if(!map[sortedArr]) {
            map[sortedArr] = [strs[i]]
        } else {
            map[sortedArr].push(strs[i])
        }
    }
    return [...Object.values(map)]
}