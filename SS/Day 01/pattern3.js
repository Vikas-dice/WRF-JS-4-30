// let nst=11;
// let nsp=0;
// for(let row=1;row<=8;row++){
//     if(row<=2){
//         if(col>=4 || col<=6){
//             process.stdout.write(" ")

//         }
//     }

//     //space
//     for(let sp=1;sp<=nsp;sp++){
//         process.stdout.write(" ")

//     }
//     //star
//     for(let st=1;st<nst;st++){
//         process.stdout.write("*")
//     }

//     //new line
//     console.log()


//     //star update 
//     nst=nst-2
//     nsp=nsp+1

    



// }
let nst=11;
let nsp=0;
for(let row=1;row<=9;row++){
    let ans=""
    for(let sp=1;sp<=nsp;sp++){
        ans=ans+" "
    }
    for(let st=1;st<=nst;st++){
        ans=ans+"*"
    }
    if(row<=2){
        for(let col=1;col<=nst;col++){
            if(col>=4 || col<=6){
                ans=ans+" "
            }else{
                ans=ans+"*"
            }
        }
    }


    nst=nst-2;
    nsp=nsp+1

    console.log(ans)

}