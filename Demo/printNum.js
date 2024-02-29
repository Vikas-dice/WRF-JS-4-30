let n=75610;
let temp=n;
let nod=0;
while(temp!=0){
    temp=Math.floor(temp/10);
    nod++;
}

let div =Math.pow(10,nod-1);

while(div!=0){
    let q=Math.floor(n/div);
    console.log(q);
    n=n%div;
    div=Math.floor(div/10);

}