for(let num=1;num<=100;num++){
    let nof=0;
    for(let div=2;div<=num-1;div++){
        if(num%div==0){
            nof=nof+1;
        }
    }
    if(nof==0){
        console.log(" prime ",num)
    }else{
        console.log(" not prime ",num)
    }
}