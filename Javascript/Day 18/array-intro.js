//syntax 

let array=[10,20,30,true,false,undefined,null,function fun(){}]

console.log(array[0]);
console.log(array[15]);
console.log(array[-1]);

let arr2=[10,20,30,[1,2,3,4],[true,false],99]
console.log(arr2[3]);
console.log(arr2[3][1]);
console.log(arr2[4][1]);


//traverse

for(let idx=0;idx<array.length;idx++){
    console.log(array[idx]);
}

//while loop
console.log("array traversal using while loop");

let idx=0;
while(idx<array.length){
    console.log(array[idx]);
    idx++;
}

// for of loop array

console.log("array tarversal using for of loop");

for(const maal of array){
    console.log(maal);
}


//hw for in loop, for each 

//loop traversal using callback func

let arr3=[10,20,30,40,50,60,70]

// arr3.map(function fun(chacha){
//     console.log(chacha);

// })

arr3.map((maal)=>{
    console.log(maal);

})

//callback -- ek aisa function jo kise dusre function m as a parameter pass krde ya

// function add(a,b){
//     console.log(a+b);
// }
// add(10,function fun(){})


let arr4=[10,20,30,true,false,undefined,null]
arr4.map(function fun(value){
    console.log(value);
})




//rest and spread oper
//rest - bind krdena ,ikattha krdena
// ...


// function sum(a,b){
//     return a+b;
// }


// let rv=sum(100,200,300,400)
// console.log(rv);


// function sum(...args){
//     console.log(args); //[100,200,300,400,500]
//     let sum=0; 
//     for(const value of args){
//         sum=sum+value;

//     }
//     return sum;

// }

// let rv=sum(100,200,300,400,500)
// console.log(rv);





// function mult(a,b){
//     return a*b;
// }

// let rv=mult(10,20,30,40)
// console.log(rv);


function mult(...maal){
    console.log(maal);
    let ans=1;
    for(let idx=0;idx<maal.length;idx++){
        ans=ans*maal[idx]
       

    }

    return ans;
}

let rv=mult(10,20,30,40)
console.log(rv);