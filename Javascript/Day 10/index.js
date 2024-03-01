
let primechapnewalafun= (ll,ul)=>{
    for(let num=ll;num<=ul;num++){
        let nof=0;

        for(let div=2;div*div<=num;div++){
            if(num%div==0){
                nof=nof+1;
            }
        }
        if(nof==0){
            console.log("Prime ",num)
        }else{
            console.log("Not Prime ",num)
        }




    }

}

primechapnewalafun(10,120)

