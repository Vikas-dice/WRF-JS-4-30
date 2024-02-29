let num=5
let nof=0;
for(let div=1;div<=num;div++){
    if(num%div==0){
        nof=nof+1;
    }

}
if(nof>2){
    console.log("not prime",num)
}else{
    console.log("prime",num)
}