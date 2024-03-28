
// function mult(...args){
//     let ans=1;
//     console.log(args);
//     // for(let idx=0;idx<args.length;idx++){

//     //     ans=ans*args[idx]
//     // }

//     for(const value of args){
//         ans=ans*value;
//     }
//     return ans;

// }

// let rv=mult(100,4,10,20)
// console.log(rv);


// function fun(...maal){
//     console.log(maal);
//     return "deepak";
// }

// let rv=fun(10,20,30,40,50,60,true,false,null)
// console.log(rv);

// function Prime(...args){
//     for(const value of args){
//         // console.log(value);
//         let nof=0;
//         for(let div=2;div*div<=value;div++){
//             if(value%div==0){
//                 nof++;
//                 break;
//             }
//         }
//         if(nof==0){
//             console.log("prime",value);
//         }
//     }

// }

// Prime(3,4,7,8,9,11,13,15,16,18,22,33,44,55,66,77,88,88,99);


// function Prime(n){

//     for(let num=1;num<=n;num++){
//         let nof=0;
//         for(let div=2;div*div<=num;div++){
//             if(num%div==0){
//                 nof++;
//                 break;
//             }
//         }
//         if(nof==0){
//             console.log("prime",num);
//         }
//     }

// }

// Prime(100);


// function prim(...args){
    
//     for(let num=1;num<=args[0];num++){
//         let nof=0;
//         for(let div=2;div*div<=num;div++){
//             if(num%div==0){
//                 nof++;
//                 break;
//             }
//         }
//         if(nof==0){
//             console.log("prime",num);
//         }
//     }

// }
// prim(100)