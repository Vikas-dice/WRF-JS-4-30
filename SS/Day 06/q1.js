

let num=35142;

let op=1;
let ans =0;


while(num!=0){
    let od=num%10;

    let ip=od;
    let id=op;

    ans=ans+id*Math.pow(10,ip-1);
    num=Math.floor(num/10);
    op=op+1;

}
console.log(ans);
