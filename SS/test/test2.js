

let n = 51234;
let k = -2;

let temp = n;
let nod = 0;
while (temp != 0) {
    temp = Math.floor(temp / 10);
    nod++;

}
k=k%nod;
if(k<0){
    k=k+nod;
}


let div = 1;
let mult = 1;

for (let i = 1; i <= nod; i++) {
    if (i <= k) {
        div = div * 10;

    } else {
        mult = mult *
            10;
    }
}
let qt = Math.floor(n / div);
let rem = n % div;
let r=rem*mult+qt;
console.log(r);


/*
touppercase
tolower




*/
