// Grid navigation, matrix traversal → Pattern 01

//full grid loop


for (let i=0; i<4; i++){
    //inner loop compltes the loop then outer loop start with new i
    for(let j=0; j<2; j++) {
        console.log(i,j)
    }
}

//Lower Triangle (excluding diagonal)


for (let i=0; i<3; i++) {
    for(let j=0; j<i; j++){
        console.log(i, j)
    }
}

//Lower Triangle (including diagonal)

for (let i=0; i<3; i++) {
    for(let j=0; j<=i; j++){
        console.log(i, j)
    }
}


// Reverse Loop from i
for (let i=0; i<3; i++){
    for(let j=i; j > 0; j--){
        console.log(i, j)
    }
}

// Inverted Triangle (top-down)
for (let i=5; i > 0; i--){
    for(let j=0; j < i; j++) {
        console.log(i, j)
    }
}



// use cases
//  Grid navigation, matrix traversal →            Pattern 01
//  Building lower/upper triangles in 2D arrays →  Pattern 02, 03
//  Dynamic inner loop ranges →                    Pattern 04, 05
