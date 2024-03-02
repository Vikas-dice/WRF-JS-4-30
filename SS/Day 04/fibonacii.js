let fun= n=>{
    let fn=0;
let sn=1;
for(let i=1;i<=n;i++){
    let nn =fn+sn;
    console.log(fn)
    fn=sn;
    sn=nn;
}

}

fun(50);




