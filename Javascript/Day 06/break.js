// let i=2;
// while(i<=5){
//     for(let j=1;j<=5;j++){
//         console.log("vikas",i,j)
//         break;
//     }
//     console.log("loop k bahar fenk dia")
//     i++;
// }
/* l1- ram=i=2
l2 i<=5 2<=5 true
l3 ram=j=1, j<=5,1<=5 true
l4 vikas 2 1
break;-loop k bahar fenk dia
i++ i=3
i<=5 3<=5 true

*/

for(let i=1;i<=5;i++){
    let j =1;
    while(j<=4){
        for(let k=1;k<3;k++){
            console.log("vikas",i,j,k)
            break;
        }
        j++;
    }
    
}
