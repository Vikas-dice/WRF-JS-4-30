

function DecimalToAnyBase(n,b){
    let p=1;
    let ans=0;
    while(n>0){
        let rem=n%b;
        n=Math.floor(n/8);
        ans=ans+rem*p;
        p=p*10;

    }
    return ans;
}
DecimalToAnyBase(102,8);
