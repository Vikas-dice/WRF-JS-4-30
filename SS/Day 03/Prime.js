let n =36;
let nof=0;
for(let div =2;div*div<=n;div++){
    if(n%div==0){
        nof =nof+1;
        break;
    }

}
if(nof==0){
    console.log(" prime",n)
}else{
    console.log(" not prime ",n)
}
