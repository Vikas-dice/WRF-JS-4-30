let obj={
    name:"vikas",
    surname:"chaudhary",
    education:"Btech",
    ismarried:false,
    edu_marks:[98,88,75],
    sayHello:function(){
        console.log("hello world");
        return "sukanya"
    },
    student:{
        name:"sukanya",
        age:20,
        edu:"graduation"

    }

}
console.log(obj.name);
console.log(obj.sayHello())
console.log(obj.student);
console.log(obj["name"])
console.log(obj["student"])
console.log(obj["student"]["age"]);

//object destructure 
let {name}=obj;
console.log(name);
console.log(name);
console.log(name);

let {education,student}=obj;
console.log(education,student);




