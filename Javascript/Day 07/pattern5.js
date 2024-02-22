let nst=1
let nsp=2
for(let row=1;row<=3;row++){
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
    nst=nst+2
    nsp=nsp-1

}