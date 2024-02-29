for (let num = 1; num <=20;num++){
    let nof=0;
    for(let div=2;div*div<=num;div++){
        if(num%div==0){div=2
            nof=nof+1;
            break;
        }
    }
    if(nof==0){
        console.log("prime ",num)
    }else{
        console.log("not prime ",num)
    }
}
