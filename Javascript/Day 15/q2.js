
function countPrime(ll,ul){
    let count=0;
 

    for(let num=ll;num<=ul;num++){
      
        let nof=0;
        for(let div=2;div*div<=num;div++){
            if(num%div==0){
                nof=nof+1;
                break;
            }

        }
      
        if(nof==0){
        //   console.log(num);
          count++;


        }
      
    }
    return count;
    
    

}

let rv=countPrime(5,20)
console.log(rv);
