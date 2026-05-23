 function cartprice(...num1){
    return num1
 }
 console.log(cartprice(100,200,300,400,500));
   
const user={
    name:"Mehar",
    age:20
}
function obj(anyobj){
    console.log(`Name of user is ${anyobj.name}
         and age is ${anyobj.age}`);
    
}
obj({
  name:"Zunair",
  age :22
});
 const array=[10,20,30,40,50]
 function arrayvalue(getarray){
    return getarray[2]
 }
 console.log(arrayvalue(array));   // arrays value can be used also in arguments
 