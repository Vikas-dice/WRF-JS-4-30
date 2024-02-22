let nst=1;
for(let row=1;row<=9;row++){

    //star
    for(let st=1;st<=nst;st++){
        process.stdout.write("*")

    }


    //new line 
    console.log();

    //star update
    if(row<5){
        nst=nst+1
    }else{
        nst=nst-1
    }
}