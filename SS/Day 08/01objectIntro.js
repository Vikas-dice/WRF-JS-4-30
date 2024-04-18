//objects - 
//array object 

// let arr=[1,2,3,4,5]
// console.log(arr.__proto__);


let object={
    firstName:"vikas",
    lastName:"chaudhary",
    age:27,
    sayHello:function(){
        console.log("hello vikas");
    },
    tellMyAge:function(){
        return 28;
    }
   
}

//access . []

console.log(object.firstName);
console.log(object.age);
console.log(object.sayHello);
console.log(object.sayHello());
console.log(object.tellMyAge());

///[]
console.log(object["firstName"]);
console.log(object["age"]);
console.log(object["tellMyAge"]());

//property naming convention

// let const="vikas";

let obj={
    _firstName:"vikas",
    firstName_:"vikas",
    $firstName:"vikas",
    firstName$:"vikas",
    first1Name:"vikas",
    // first name:"vikas"
    // @firstName:"vikas",
    // first1Name@:"vikas",
    let:"let",
    const:"const",
    function:"function",
    while:"while",
    for:"for",

}

//computed properties

let a=10;
let obj2={
    // key:"value"
    // key:a,
    // a:10,
    // [a]:"value"
    // [a]:a,
    a,
}

console.log(obj2);


//for in loop

for(const key in obj){
    console.log(key,obj[key]);
}

let obj3={
    a:10,
    B:20,
    c:30,
    d:40,
    fun:()=>{
        console.log("i am a fat arrow method/function inside obj3");
    }

}

//for in
let c=0;
for(const maal in obj3){
    console.log(maal,obj3[maal]);
    c++;
}

console.log(c);

// copy merge 

//5 ways obj-obj copy/clone

let object1={
    x:100,
    y:200,
    z:300,
}

// let object2=object1;
//spread op
let object2={...object1}
console.log(object2);
object1.age=27;
console.log("object 1 --",object1);
console.log("object 2 --",object2);
console.log(object1===object2);


//method 2 - loop 

let object3={};
for(const key in object1){
    object3[key]=object1[key]
}
console.log(object3);
console.log(object3===object1);

//method Object.assing()

// let object4={}
let object4=Object.assign({},object1,{name:"sukanya"},{academy:"dice"})
console.log(object4);
console.log(object4===object1);


//method 4 - structureclone()
let object5=structuredClone(object1)
console.log(object5);
console.log(object5===object1);


//Object.assing(src,target)

let object6=Object.assign(object1)
console.log(object6);
console.log(object6===object1);



// primtive - data

let aa =10;
let bb =aa;
console.log(aa,bb);
aa++;
console.log(aa,bb);


