

function name(){    
    console.log("Z");
    console.log("U");
    console.log("N");
    console.log("A");     //function body
    console.log("I");
    console.log("R");
}    
name()
 function sum(num1,num2)   // parameters
 {
    console.log(num1+num2);
    
 }
 const result=sum(10,20)  //arguments
console.log(result);

function sum(num1,num2)   
{
    let sum=(num1+num2);
    return sum
    // return num1+num2  alternate method
}
const result=sum(10,20)
  console.log("Result: ",result);

function login(username="Samm"){
    if(username===undefined){       //!username and username===undefined are both equal
        console.log("Please enter username");
        return  
    }
    return `${username} just logged in` 
}
console.log(login("Zunair"));  //if no arguments then undefined
