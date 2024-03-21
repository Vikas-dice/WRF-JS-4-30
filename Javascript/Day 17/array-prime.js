

let nums=[10,12,13,15,16,17,22,444,55,66,77,89,91];


for(let i=0;i<nums.length;i++){
    let nof=0;

    // let number=nums[i];
    for(let div=2;div*div<=nums[i];div++){
        if(nums[i]%div==0){
            nof++;
            // console.log(nof);

        }
    }
    if(nof==0){
        console.log("prime",nums[i]);
    }
    
}