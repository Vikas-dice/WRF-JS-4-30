let n=11;
for(let row=1;row<=n;row++){
   for(let col=1;col<=n;col++){
    if(row==1){
        if(col==1 || col>=Math.ceil(n/2)){
            process.stdout.write("*")
        }else{
            process.stdout.write(" ")

        }

    }else if(row<=Math.floor(n/2)){
        if(col==1 || col==Math.ceil(n/2)){
            process.stdout.write("*")

        }else{
            process.stdout.write(" ")


        }


    }else if(row==Math.ceil(n/2)){
        process.stdout.write("*")



    }else if(row<=Math.ceil(n/2)+2){
        if(col==Math.ceil(n/2) || col==n){
            process.stdout.write("*")

        }else{
            process.stdout.write(" ")
        }


    }else if(row==n){
        if(col<=Math.ceil(n/2) || col==n){
            process.stdout.write("*")
        }else{
            process.stdout.write(" ")
        }


    }
   
   }
   console.log()

}