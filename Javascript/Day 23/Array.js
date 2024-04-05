

// //data type - data structure - linear ds - dynamic type store (js)
// /*


// */

// let array=[12,14,15,16,17]

// //flat array - 1d array

// let arr2=[10,20,[1,2,3,4],true,false,{name:
// "vikas"},function fun(){}]

// console.log(arr2[3]);
// console.log(arr2[2][2]);
// console.log(arr2[50]);

// //array -immutable , mutable?
// arr2[4]="chaUDHAry";
// console.log(arr2);

// //new Array

// let arr3=new Array(100,200,300,400);
// console.log(arr3);


// //array.of

// let arr4= Array.from([10,20,30,40,50,60])
// console.log(arr4);


// //array.of

// let arr5= Array.of(1000,2000,3000,4000)
// console.log(arr5);


// let multarr=[[10,20,30],[100,200,300],[1000,2000,3000]]
// console.log(multarr);
// console.log(multarr[1])
// console.log(multarr[1][2]);


// // array traversal


// for(let i=0;i<arr4.length;i++){
//     console.log(arr4[i]);
// }


// //to string method

// let arr6=[100,200,300,400]
// console.log(arr6.toString());

// //traversal - forEach loop

// let arr7=[1,2,3,4,5,6,7,8,9,10]
// let resaponse=arr7.forEach((maal,index,arr)=>{
//     console.log(maal,index,arr);
//     return "vikas"
// })

// console.log(resaponse);


// //array methods
// //slice
// //splice
// // pop push shift unshit index pof lastindex find concat

// let arr8=[10,20,30,40,50]
// let res=arr8.push(10)
// console.log(arr8);
// console.log(res);

// //pop
// arr8.pop();
// console.log(arr8);

// arr8.push(100,200,300)
// console.log(arr8);

// //shift
// let arr8=[10,20,30,40,50]

// arr8.shift()
// console.log(arr8);








// let res=arr8.unshift(10000)
// console.log(arr8);
// console.log(res);


//index of ,includes 
// let arr8=[10,20,30,40,50]
// console.log(arr8.includes(1000));
// console.log(arr8.indexOf(400));


//splice - 
// let arr8=[10,20,30,40,50]
// let res=arr8.splice(1,2)
// console.log(arr8);
// console.log(res);

// let res=arr8.splice(2,1,200)
// console.log(arr8);
// console.log(res);

// arr8.splice(1,3,100,200,300)
// console.log(arr8);


//slice

let arr8=[10,20,30,40,50]
// let res=arr8.slice(1,4)
// console.log(arr8.slice(0));
// // console.log(res);
// console.log(arr8.slice(-1,-4));
// console.log(arr8.slice(-4,-1));

// let res=arr8.findIndex((value,index)=>{
//     // console.log(value);
//     if(value==40){
//         return index
//     }
   
// })
// console.log(res);
// console.log(arr8.findIndex(40))

// map filter reduce















