// Write a program to print true if the number is unique else print false if it contains duplicates
// input: 1211   output: False
// input: 453    output: True

var num = prompt("Enter a number : ");
var count = 0;
for (let i = 0; i < num.length; i++) {
    for (var j = 0; j < num.length; j++) {
        if (num[i] == num[j] && i != j) {
            count = 1;
        }
    }
}
if (count >= 1) {
    console.log(false);
    document.write(`<h3>false</h3>`);
}
else {
    console.log(true);
    document.write(`<h3>true</h3>`);
}

//Method - 2

var num = prompt("Enter a number : ");
var unique = true;

for (let i = 0; i < num.length; i++) {
    for (let j = i + 1; j < num.length; j++) {
        if (num[i] === num[j]) {
            unique = false;
            break;
        }
    }
    if (!unique) {
        break;
    }
}
console.log(unique);
document.write(`<h3>${unique}</h3>`);

// Write a program to print the below expression for the given number (Factorial)
// input: 5  output:5*4*3*2*1=120

//Factorial of a number in reverse order
var num = prompt("Enter a number to print factorial(reverse) : ");
var p = 1;
var res = "";
for (let i = num; i >= 1; i--) {
    p *= i;
    if (i == 1)
        res += i + "=";
    else
        res += i + "*"

}
console.log(`Factorial of (${num}) in reverse order is : ${res + p}`);
document.write(`<h3>Factorial of (${num}) in reverse order is : ${res + p}</h3>`);

//method 2
var num = prompt("Enter a number to print factorial(reverse) : ");
var p = 1;
var res = "";
for (let i = 1; i <= num; i++) {
    p *= i;
    res += i;
    result=res.split("").reverse().join("*");
}
console.log(`Factorial of (${num}) in reverse order is : ${result} = ${p}`);
document.write(`<h3>Factorial of (${num}) in reverse order is : ${result} = ${p}</h3>`);