// star pattern


// square stars
let n= 4
for(let i=0; i<4; i++){
    let row = ""
    for(let j=0; j<n; j++) {
        row = row+ "*"
    }
    console.log(row)
}

// right angle triangle

for (let i=0; i<5; i++){
    let row = ""
    for(let j=0; j<i; j++){
        row = row+ "*"
    }
    console.log(row)
}



