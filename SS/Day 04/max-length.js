

function maxlength(arr){
    let max=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i].length>max){
            max=arr[i].length;

        }

    }
    return max;


}

let names=["vikas","puneet","narayan","ravi","anand","diceacademy"]
let rv=maxlength(names)
console.log(rv);

