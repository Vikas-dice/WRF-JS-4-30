let num=1250;
let nod=0;
let temp=num;
while(temp>0){
    temp=Math.floor(temp/10)
    nod=nod+1;

}
let div=Math.pow(10,nod-1);
while(div!=0){
    let q=Math.floor(num/div);
    console.log(q)
    num=num%div;
    div=Math.floor(div/10);

}


