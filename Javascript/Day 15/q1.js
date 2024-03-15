


// let fun=(num)=>{

//     while(num>0){
//         let ld=num%10;
//         console.log(ld);
//         num=Math.floor(num/10)
//     }

// }

// fun(786);


// let fun=(num)=>{
//     let nod=0;
//     while(num>0){
//         num=Math.floor(num/10);
//         nod=nod+1;
//     }
//     return nod;
// }

// let rv=fun(67889);
// console.log(rv);

/*
5689
output 5
6
8
9

5689
5689%1000= 5,689, print 5
689%100=6,89,print 6
89%10=8,9,print 8
9%1=9,0,print 9
0





*/



let fun2=(num)=>{
    let temp=num;
    let nod=0;
    while(temp>0){
        temp=Math.floor(temp/10);
        nod=nod+1;
    }
    let div =Math.pow(10,nod-1);
    while(num>0){
        let fd=Math.floor(num/div);
        console.log(fd);
        let rem = num%div;
        num=rem;
        div=Math.floor(div/10);
    }
}
fun2(567866);

console.log(Math.pow(10,3))
console.log(Math.random());
console.log(Math.sqrt(36));

/*

563142



*/

