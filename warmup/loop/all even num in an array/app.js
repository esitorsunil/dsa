// Without loop (repetitive)
console.log("Hello World");
console.log("Hello World");

// With loop (efficient)
for (let i = 0; i < 2; i++) {
  console.log("Hello World");
}

//increment by 2 
for (let i=0; i<10; i+=2){
    console.log(i);
}

//function inside loop
function greet(i) {
    console.log("Hello" + i);
}

for (let i=0; i<5; i++){
    greet(i);
}


// Loop inside array 
let arr = [3, 7, 63, 86, 99]

for (let i=0; i<arr.length; i++) {
    console.log("Element at index "+ i + ": "+ arr[i]);
}

for (let i=0; i<arr.length; i++){
    if(arr [i] %2 === 0) {
        console.log("Even numbers "+ arr[i]);
    }
}

// while loop

let i=0;

while (i<5){
    console.log(i);
    i++;
}

























