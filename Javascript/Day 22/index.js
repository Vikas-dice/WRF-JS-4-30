

// // let arr =[10,20,30,40]
// // let arr2=arr; //shallow

// // let newarr=[];
// // for(let i=0;i<arr.length;i++){
// //     newarr[i]=arr[i]
// // }

// // arr.push(100);
// // console.log(newarr);
// // console.log(newarr==arr);


// //



// class A{
//     x="Vikas";
//     constructor(){
//         return this.x;
//     }
// }
// class B extends A{
//     name;
//     constructor(name){
//         super(name)
//         this.name=name;

// //     }



// // }
// // let b1= new B("sukanya");
// // console.log(b1);
// // console.log(b1.x);



// class A{
//     x=10;
//     y="vikas";

//     constructor(){
//         return this.y;
//     }
// }

// class B extends A{
//     z;

//     constructor(z){
//         super(z);
//         this.z=z;

//     }
// }

// // let a1= new A();
// // console.log(a1);
// let b1 = new B(100);
// console.log(b1.z);








//public prop pvt prop protected -access modifier - visiblity 


class A{
    x=10;
    y=20;
    #name="vikas";
    static getFullName(){
        return this.name;
    };
    fun(){
        return this.#name;

    }
}

// let a1 = new A();
// console.log(a1.fun());
// console.log(A.x);
console.log(A.getFullName());
console.log(A.x);









