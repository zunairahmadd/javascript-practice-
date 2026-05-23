const mail=[];
if(mail){
    console.log("Got the user email");
}else{
    console.log("Cant get usr email");
    
}  // falsy values
// False null undefined 0 BigInt 0n -0 "" Nan

//Truthy values
// [] " " 'false' "0" {} function(){}

// if(mail.length===0){
//     console.log("Array is empty");
    
//}
const obj={}
if(Object.keys(obj).length===0){
    console.log("Empty object");
    
}