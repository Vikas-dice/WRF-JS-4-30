let nst=1;
let nsp=8
for(let row=1;row<=9;row++){

    //star
    for(let st=1;st<=nst;st++){
        process.stdout.write("*")
    }


    //space
    for(let sp=1;sp<=nsp;sp++){
        process.stdout.write(" ")
    }

    //star
    for(let st=1;st<=nst;st++){
        process.stdout.write("*")
    }

    // new line
    console.log();


    //star and space update
    if(row<5){
        nst=nst+1;
        nsp=nsp-2
    }else{
        nsp=nsp+2
        nst=nst-1
    }
}