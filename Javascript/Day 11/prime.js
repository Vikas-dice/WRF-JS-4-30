
let ll=1;
let ul=100;
for(let num=ll;num<=ul;num++){


    let nof=0;


    for(let div=2;div*div<=num;div++){
        if(num%div==0){
            nof=nof+1;
        }

    }
    if(nof==0){
        console.log("prime",num);
    }else{
        console.log("not prime",num);
    }
}