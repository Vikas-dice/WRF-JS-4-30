//keyword if else while for let var const break conmitnue return this

//global - 

console.log(this) //window object

function fun(){
    console.log(this);
}
fun();


let obj={
    name:"puneet",
    age:27,
    merafun:function(){
        console.log(this)
        return 10;
    }
}

console.log(obj.merafun());

let obj2={
    name:"ravi",
    age:24,
    fun:()=>{
        console.log(this);
    }
}

console.log(obj2.fun());

//global - this - window
//function k andrr - this - window
//obj-func-es5 -method - this - parent obj
//obj -es6 fun-fat arrow- this - window

