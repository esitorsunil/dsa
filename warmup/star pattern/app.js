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

//07. Right align star angle trinangle

//let n = 5

for (let i=0; i<n; i++) {
    let row= ""
    for (let j=0; j< n - (i + 1); j++){
         row += " "
    }
    for (let k=0; k< i+1; k++) {
        row += "*"
    }
    console.log(row)
}

//08. Binary pattern with alternating toggle

//let n = 5

for(let i=0; i<n; i++) {
    let row = "";
    let toggle = 1;
    for (let j=0; j<i+1; j++) {
        row = row + toggle
        if(toggle == 1)   {
            toggle = 0;
        }else {
            toggle = 1
        }
        
    }
    console.log(row)
}

// 09. Binary pattern with continuous toggle across rows

//let n = 5
let toggle = 1;
for(let i=0; i<n; i++) {
    let row = "";

    for (let j=0; j<i+1; j++) {
        row = row + toggle
        if(toggle == 1)   {
            toggle = 0;
        }else {
            toggle = 1
        }
        
    }
    console.log(row)
}

// center pyramid

//let n = 4

for (let i=0; i<n; i++) {
    let row=""
    for (let j=0; j< n- (i+1); j++) {
        row += " "
    }
    for (let k=0; k< i * 2+1; k++) {
        row += "*"
    }
    console.log(row)
}