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
//let n= 4
for (let i=0; i<n; i++){
    let row = ""
    for(let j=0; j<= i; j++){
        row += "*"
    }
    console.log(row)
}

// right angle number triangle

//let n = 4

for (i=0; i<n; i++){
    let row=""
    for(let j=0; j<=i; j++){
        row+= j+1 + " "
    }
    console.log(row)
}

// Triangle with repeating row numbers

//let n= 4
for (let i=0; i<n; i++){
    let row=""
    for(let j=0; j<=i; j++){
        row+= i+1 + " "
    }
    console.log(row)
}


// 05. Inverted triangle with decreasing columns

//let n= 4
for (let i=0; i<n; i++){
    let row=""
    for(let j=0; j<=n-i; j++){
        row+= j+1 + " "
    }
    console.log(row)
}

// 06. Inverted triangle
//let n = 5

for(let i=0; i<n ; i++) {
    let row = ""
    for(let j=0; j< n-i; j++) {
        row += "*"
    }
    console.log(row)
}

//




