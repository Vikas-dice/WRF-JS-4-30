

let str="vikas chaudhary"
let str2='viikass'
let str3=`vuialdnoijf
fhuiwhf
wefegugf
lfbiuerwhfi`;
console.log(str3);

//typeof oper

console.log(typeof str2);


//length 

console.log(str2.length);

// let num=5467;
// console.log(num.length);


// let fname="vikas"
// let surname="chaudhary"
// let fullname=fname+" "+surname;
// console.log(fullname);



// let fname="vikas"
// let surname="chaudahry"
// let fullname=`${fname} ${surname}`;
// console.log(fullname);




let name="vikas chaudhary"
console.log(name.toUpperCase());


let name2="VIKAS"
console.log(name2.toLowerCase());

//indexof

let name3="sukanya";
console.log(name3.indexOf('n'));
console.log(name3.indexOf('z'));

let name4="vikas chaudhary delhi";
console.log(name4.indexOf('delhi'));


let name5="sukanya badoghu";
console.log(name5.startsWith('s'));
console.log(name5.startsWith('suk'));


let name6="vikas chaudhary"
console.log(name6.endsWith('ry'));


//slice


let name7="vikas chaudhary"
console.log(name7.slice(2,8));
console.log(name7.slice(-1,-5));
console.log(name7.slice(2));
let slicedstr=name7.slice(3)
console.log(slicedstr);


//substring

// let name8="vikas chaudhary"
// let chotistriong=name8.substring(2,8)
// console.log(chotistriong);

//slice and substring



// let name9="sukanya badoghu"
// console.log(name9.substr(1,7));


// let name10="savior basu"
// console.log(name10.includes('s'));












// let vowels ="aeiou";
// let name11="vikas chaudhary"


// if(name11.includes(vowels[i])){
//     console.log();
// }


// let  name11 ="Ravi Shankar Singh ";
// let  vowel="a e i o u";
// let  countv=0;
// let countc=0;
// for(let i=0; i < name11.length; i++){
//         let count =0;
//         let  ans =name11[i]
//         if(vowel.includes(ans)){
//                 console.log(name11[i], "Its is Vowels");
//                 countv++
//         }else{
//             console.log(name11[i],"Its is  Not Vowels");
//             countc++
//         }

// }
// console.log(countv, countc);


let nam = 'klaus';
let vowels = 'AEIOU';

for (let i = 0; i < nam.length; i++) {
    let a = nam[i];
    let isVowel = false;

    for (let j = 0; j < vowels.length; j++) {
        if (a === vowels[j]) {
            isVowel = true;
            break;
        }
    }

    if (isVowel) {
        console.log(a);
    }
}