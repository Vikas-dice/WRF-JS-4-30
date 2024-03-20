
let num=786745;
let k =342;
let nod=0;
let temp=num;
while(temp!=0){
    temp=Math.floor(temp/10);
    nod =nod+1;
}
k=k%nod;

if(k<0){
    k=k+nod;
}

let div=1;
let mult=1;
for(let i=1;i<=nod;i++){
    if(i<=k){
        div=div*10;
    }else{
        mult=mult*10;

    }
}
let rot=0;
let qt=Math.floor(num/div);
let rem=num%div;
rot=rem*mult+qt;
console.log(rot);