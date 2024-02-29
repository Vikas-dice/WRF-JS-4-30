//7846464- 4 6 4 6 4 8 7

/*
9845 % 10=5 out
984 %10 =4 out
98 %10 =8
9%10 =9



*/


let num=98676;
while(num>0){
    let ld=num%10;
    console.log(ld)
    num=Math.floor(num/10)
}


console.log(Math.floor(98787/10000))