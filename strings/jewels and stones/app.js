
//favourite : solved myself

function stoneAndJewels(jewels, stones ) {
    let count = 0
    for (let i=0; i<jewels.length; i++) {
        for(let j=0; j<stones.length; j++) {
            if(jewels[i] == stones[j])
                count++
        }
    }
    return count
}

console.log(stoneAndJewels("aA", "aAAbbbb") )

//Brute force approach : not good for interview

function stoneAndJewels(jewels, stones ) {
    let count = 0
    for (let i=0; i<stones.length; i++) {
        if(jewels.includes(stones[i])) {
            count++
        }
    }
    return count
}