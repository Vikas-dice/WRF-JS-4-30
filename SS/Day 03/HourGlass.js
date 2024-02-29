
let nsp=0;
let nst=5;
let n =5;
for(let row=1;row<=2*n;row++){
    //space
    for(let sp=1;sp<=nsp;sp++){
        process.stdout.write(" ")
    }

    //star
    for(let st=1;st<=nst;st++){
        process.stdout.write("*")

    }
    


    // new line 



    //star space update 
    if(row<=Math.floor(n/2)){
        nst=nst-1;
        nsp=nsp+1;
    

    }else{
        nst=nst+1;
        nsp=nsp-1;
    }
    console.log();
   

}