

let num=21453;

let inv=0;
let op=1;
while(num!=0){
    let od=num%10;
    let id=op;
    let ip=od;


    inv=inv+id*Math.pow(10,ip-1);

    num=Math.floor(num/10);
    op++;






}
console.log(inv);