

/*
153 = 1 ki pwoer3+ 5 ki powewr 3 + 3 ki power 3 ===153
407 - 4 pow 3+ 0pow 3 + 7 pow 3=== 407

*/

// console.log("hello world");

let fn=(num)=>{
 
let sum=0;
let temp=num;
let nod=0;

let temp2=num;
while(temp2!=0){
    temp2=Math.floor(temp2/10)
    nod++;
    

}


while(temp!=0){
    let ld=temp%10;
   

    temp=Math.floor(temp/10);
    // sum+=ld*ld*ld;
    // sum+=Math.pow(ld,nod);
    sum+=Math.pow(ld,nod)

}


if(sum==num){
    console.log("yes ")
}else{
    console.log("no");
}





}

let number=prompt("");
fn(num)





