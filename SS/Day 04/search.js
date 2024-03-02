function search(arr,data){
    for(let i=0;i<arr.length;i++){
        if(arr[i]==data){
            return i;
        }
    }

}
let nums=[10,20,30,40,50,60]
let data=60;
let chacha=search(nums,data)
console.log(chacha);