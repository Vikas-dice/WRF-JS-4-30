

// let arr1=[10,20,30,40,50]
// let arr2=arr1;


// // non primitive types (),[],{}- address jata h

// //primitive = value

// arr1.push(100);
// console.log(arr1);
// console.log(arr2);
// arr1.pop();
// arr2.pop();
// console.log(arr1);
// console.log(arr2);


//spread op ...
// array form 

let arr1=[10,20,30,40,50]
let arr2=[...arr1]
console.log(arr1);
console.log(arr2);

arr1.push(100)
console.log(arr1);
console.log(arr2);


let obj={
    name:"vikas",
    age:27,


}

let obj2={...obj}

// address 

obj.salary=10000;
console.log(obj);
console.log(obj2);


let arr3=["vikas","puneet",[1,2,3,4],true,false]

let arr4=[...arr3,[100,200,300]]
console.log(arr3);
console.log(arr4);


