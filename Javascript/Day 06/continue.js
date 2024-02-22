// for(let i=1;i<=6;i++){
//     if(i==3){
//         continue;
//     }
//     console.log("vikas",i)
// }
/*
ram= i=1
i<=6 1<=6 true
l2 i==3 1==3 false
l5 vikas 1
i++ i=2
i<=6 2<=6 true
l2m i==3 2==3 false
l5 vikas 2
i++ i=3
i<=6 3<=6 true
l2 - i==3 3==3 true
l3 conitnue;



*/
console.log("Using break statement:");
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        console.log("Breaking out of the loop at i =", i);
        break;
    }
    console.log("Current i value:", i);
}
console.log("Loop ended.");
console.log();
console.log("Using continue statement:");
for (let j = 1; j <= 5; j++) {
    if (j === 3) {
        console.log("Skipping iteration at j =", j);
        continue;
    }
    console.log("Current j value:", j);
}
console.log("Loop ended.");






























// Example of break and continue statements in a while loop

// Using break statement to exit the loop when a condition is met
console.log("Using break statement:");
let i = 1;
while (i <= 5) {
    if (i == 3) {
        console.log("Breaking out of the loop at i =", i);
        break;
    }
    console.log("Current i value:", i);
    i++;
}
console.log("Loop ended.");

console.log(); // Just for spacing in output

console.log("Using continue statement:");
let j = 1;
while (j <= 5) {
    if (j == 3) {
        console.log("Skipping iteration at j =", j);
        j++;
        continue;
    }
    console.log("Current j value:", j);
    j++;
}
console.log("Loop ended.");
