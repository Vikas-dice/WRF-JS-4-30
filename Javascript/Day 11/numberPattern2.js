
var ans="";

let a=0;
let b=1;
for(let row=1;row<=4;row++){


    for(let col=1;col<=row;col++){
        ans=ans+a+" "; //""+0+ "0" 
        let n=a+b;
        a=b;
        b=n;


    }
    console.log(ans);
    // let ans2=charCodeAt(5) 
    // console.log(ans2);

}


