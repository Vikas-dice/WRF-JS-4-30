// [],(),{}

let a =10;
let b=a;

//[],(),{}
//value
a=30;
console.log(a);
console.log(b);

let arr1=[10,20,30,40]
let arr2=arr1;
arr1.pop();
console.log(arr1);
console.log(arr2);


//acha tarika to copy an array - spread oper
//...


let arr3=[100,200,300,400,500]
let arr4=[...arr3]
arr3.pop();
console.log(arr3);
console.log(arr4);

//hw - deep copy and shalow copy in js

let obj1={
    name:"vikas",
    age:27
}
let obj2=obj1;

//[].().{}- address jate h

obj1.profession="teacher";
console.log(obj1);
console.log(obj2);

//spread op




let obj3={
    name:"sukanya",
    age:19
}

let obj4={...obj3}
obj3.profession="student";
console.log(obj3);
console.log(obj4);

//hw
// map filter reduce 
//array push pop shift unshift 


