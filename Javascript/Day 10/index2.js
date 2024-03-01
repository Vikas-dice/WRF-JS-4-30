

function Upper(n){
    let nsp=4;
    let nst=1;
    for(let row=1;row<=n;row++){
        //space
        for(let sp=1;sp<=nsp;sp++){
            process.stdout.write(" ")
        }

        //star
        for(let st=1;st<=nst;st++){
            process.stdout.write("* ")

        }
        //new line 
        console.log();

        //update 
        nsp=nsp-1;
        nst=nst+1;
    }
}


function Lower(n){
    let nsp=0;
    let nst=5;
    for(let row=1;row<=n;row++){
       
   
        //space
        for(let sp=1;sp<=nsp;sp++){
            process.stdout.write(" ")
        }
        //star
        for(let st=1;st<=nst;st++){
            process.stdout.write("* ")

        }
        //new line
        console.log();
        //update
        
        nsp=nsp+1;
        nst=nst-1;
     
    }



}


function completeDiamond(n){
    Upper(n);
    Lower(n);
}
completeDiamond(5)
completeDiamond(5)
completeDiamond(5)



 let merafun=(ll,ul)=>{
    for(let num=ll;num<=ul;num++){
        if(num%3==0){
            console.log("multiple of 3",num);
        }else if(num%5==0){
            console.log("multiple of 5",num);

        }else if(num%7==0){
            console.log("multiple of 7",num);

        }
    }
}
merafun(10,70)