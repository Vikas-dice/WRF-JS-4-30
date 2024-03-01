function HollowDiamond(n){
    let nsp=4;
    let nst=1;
    for(let row=1;row<=10;row++){
        for(let sp=1;sp<=nsp;sp++){
            process.stdout.write(" ")
        }
        //star
        process.stdout.write("* ")
        //space
        for(let sp=1;sp<=nsp;sp++){
            process.stdout.write(" ")
        }
        //star
        process.stdout.write("* ")
        //new line 
        console.log();
        //update
        if(row<=5){
            nsp=nsp+1;

        }else{
            nsp=nsp-1;
        }

    


    }




}

HollowDiamond(5)
