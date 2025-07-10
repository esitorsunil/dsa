var a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var evenNum = function(arr) {
    var even = [];

    for (var i=0; i<arr.length; i++) {
        if (arr[i]%2 == 0) {
            even.push(arr[i]);
        }
    }
    return even;
}

console.log(evenNum(a));