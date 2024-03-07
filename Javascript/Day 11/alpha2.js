let ch="A".charCodeAt();

for(let row=1;row<=5;row++){
    let ans ="";
    for(let col=1;col<=row;col++){
        ans=ans+String.fromCharCode(ch);
        ch=ch+1;

    }
    console.log(ans);

}


