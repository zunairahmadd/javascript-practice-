//var a=10;

let a=200;  //global scope

if(true)
    {
    let a=10;
    const b=30;   //local scope
console.log(a);

}
//console.log(a);

function one(){
    const username="Mehar"

    function two(){
        const source="Youtube"    //ice cream rule
        console.log(username);
        
    }
   // console.log(source);
    two()
}
one()

if(true){
    const username="Zunair"
    if(username==="Zunair"){
        const source="Youtube"
        console.log(username+source);
        
    }
  //  console.log(source);
    
}
//console.log(username);
