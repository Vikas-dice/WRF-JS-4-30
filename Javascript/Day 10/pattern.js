let nst=2;
let nsp=3;

for(let row=1;row<=7;row++){
    if(row<=2){
        //space
        for(let sp=1;sp<=nsp;sp++){
            process.stdout.write(" ")
        }

        //star 
        for(let st=1;st<=nst;st++){
            process.stdout.write("*")

        }
        // new line 
        console.log()
        //update
        nst=nst+1;

    }else if(row>2 && row<=4){
        //star
        
        for(let st=1;st<=nst;st++){
            process.stdout.write("*")

        }
        nst=nst+5;


    }else if(row>5 && row<=7){
        for(let sp=1;sp<=nsp;sp++){
            process.stdout.write(" ")

        }
        for(let st=1;st<=nst;st++){
            process.stdout.write("*")

        }
        console.log()

    }
}


