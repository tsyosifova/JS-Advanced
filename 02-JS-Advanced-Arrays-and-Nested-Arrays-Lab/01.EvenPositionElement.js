function evenPositionElement(arr) {
let output = '';

for (let i = 0; i < arr.length; i += 2) {
    output += arr[i] + ' ';    
}

console.log(output);
}

evenPositionElement(['20', '30', '40', '50', '60']);
evenPositionElement(['5', '10']);