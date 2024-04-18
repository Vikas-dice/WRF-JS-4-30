// let heading=document.getElementById("heading");
// console.log(heading);
// // let heading2=document.getElementsByClassName("heading2");
// // console.log(heading2);

// let heading2=document.getElementById("head2");
// console.log(heading2);

// let para=document.getElementsByTagName("p");
// console.log(para);

// let heading3=document.getElementsByTagName("h1");
// console.log(heading3);

// let anchor=document.getElementsByTagName("a");
// console.log(anchor);


// let paras=document.getElementById("para1");
// console.log(paras);


// let paras= document.querySelector("#para");
// console.log(paras);


// let paras=document.querySelectorAll("#para");
// console.log(paras);


// let h1=document.getElementById("heading");
// console.log(h1);
// console.log(h1.classList);



// let h1=document.getElementById("heading");
// // h1.className="pink";
// // console.log(h1.classList);

// h1.classList.add("pink");
// console.log(h1.classList);


// let h1=document.getElementById("heading");
// console.log(h1);
// console.log(h1.classList);
// // h1.className="sukanya"
// // console.log(h1.classList);

// h1.classList.add("sukanya");
// console.log(h1.classList);

// let p1=document.getElementById("para1");
// // console.log(p1);
// p1.style.color="pink";
// p1.style.background="green";

// let p2=document.getElementById("para2");
// p2.style.color="black";
// p2.style.background="red";


// let paras=document.querySelectorAll("p");
// // console.log(paras);

// // for(const elt of paras){
// //     // console.log(elt);
// //     elt.style.color="magenta";
// //     elt.style.background="blue";
// // }


// for(let idx=0;idx<paras.length;idx++){
//     paras[idx].style.color="pink";
// }



// let headings =document.querySelectorAll("h2");
// console.log(headings);

// for (const maal of headings){
//     maal.className="green";
// }


// let paragraphs = document.querySelectorAll("p")
// // console.log(paragraphs);
// for(let idx=0;idx<paragraphs.length;idx++){
//     paragraphs[idx].className="pink"
// }


//create elt using js

// let h2=document.createElement("h2")
// // console.log(h2);
// h2.innerText="hello world from dom;"

// let root=document.getElementById("root");
// root.append(h2);

// let para=document.createElement("p");
// para.innerText="hello vikas chaudhary dice academy"
// para.innerHTML="<i><span>vikas</span></i>"
// root.appendChild(para);

// let h3=document.createElement("p");
// h3.innerText="puneet chaudhart"
// h3.innerHTML="<span>hello world </span>"
// root.prepend(h3);






// let list=document.getElementById("root")
// console.log(list.childNodes);
// console.log(list.children);


let list =document.getElementById("root")
// console.log(list.parentNode.parentNode.parentNode.parentNode);
console.log(list.parentElement.parentElement.parentElement);

