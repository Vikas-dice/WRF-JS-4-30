
let num =56788;
let k =-2;
let temp=num;
let nod=0;
let div=1;
let mult=1;
while(temp!=0){
    temp=Math.floor(temp/10);
    nod++;
}
if(k<0){
    k=k+nod;

}
k=k%nod;

for(let i=1;i<=nod;i++){
    if(i<=k){
        div=div*10;
    }else{
        mult=mult*10
    }

}
let rot=0;
let qt=Math.floor(num/div);
let rem=num%div;
rot=rem*mult+qt;
console.log(rot);





