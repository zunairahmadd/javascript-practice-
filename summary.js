//primitive datatypes

//string boolean number null undefined symbol bigint

const score=100;
const scorevalue=100.3;

const isloggedin=false;
const temp=null;
let email;

const id=Symbol('123');
const anotherid=Symbol('123');
console.log(id===anotherid);    //=== strict check

const bignumber=123546354756357n


//reference datatypes (non primitive)
//arrays objects and functions

const friwnds=["Hasnain","munir","sonu","rehan"]
let myobj={
    name:"Zunair",
    age:20,
}

const myfun=function(){
    console.log("Hello world");
    
}
//******************************************************
  

let name="Bilalarshad"

let anothername=name;
anothername="Muhammad Bilal"
// console.log(name);
// console.log(anothername);


let userone = {
email:"abc@google.com",

}
let usertwo=userone;

usertwo.email="ali@ucp.pk"
console.log(userone.email);
console.log(usertwo.email);

