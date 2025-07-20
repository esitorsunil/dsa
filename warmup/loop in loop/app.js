// Grid navigation, matrix traversal → Pattern 01

//full grid loop


for (let i=0; i<4; i++){
    //inner loop compltes the loop then outer loop start with new i
    for(let j=0; j<2; j++) {
        console.log(i,j)
    }
}

//exclude diagonal


for (let i=0; i<3; i++) {
    for(let j=0; j<i; j++){
        console.log(i, j)
    }
}

//include diagonal

for (let i=0; i<3; i++) {
    for(let j=0; j<=i; j++){
        console.log(i, j)
    }
}