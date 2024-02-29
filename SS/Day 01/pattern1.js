// for(let row=1;row<=5;row++){
//     let val=1;
//     let str="";
//     for(let col=1;col<=row;col++){
//         str+=val;
//     }
//     console.log(str)
// }





// for(let row=1;row<=5;row++){
//     for(let col=1;col<=row;col++){
//         if(row==5){
//             process.stdout.write("*")
//         }else if(row<=4){
//             if(col==1 || col<=row-1){
//                 process.stdout.write(" ")
//             }
//         }
//     }
//     console.log()

// }


// for(let row=1;row<=5;row++){
//     let ans="";
//     let val=1;

//     for(let col=1;col<=row;col++){
//         ans=ans+row;
        

//     }

//     console.log(ans)




// }


for(let row=1;row<=6;row++){
    let ans="";
    for(let col=1;col<=row;col++){
        if(row === 6) {
            ans += "*";
          }

     
        if(row>=2 || row<=6){
            if(col==1 || col==row){
                ans=ans+"*"

            }else{
                ans=ans+" "
            }

        }
       
        
       
    }

    console.log(ans)





}















