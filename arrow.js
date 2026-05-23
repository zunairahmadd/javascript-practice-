const user={
    name:"Zunair",
    price:999,

    welcomemessage: function(){
        console.log(`${this.name}, welcome to the website`);
         // this refers the current context
         console.log(this);
         
    }
}
// user.welcomemessage()
// user.name="Mehar"
// user.welcomemessage()
// console.log(this);

// this only used in objects not in functions
function one(){
    name:"Zunair"
    //console.log(this.name);
}
one()

const fun=()=>{
name:"Zunair"
  //  console.log(this);
}
fun()

// //const sum=(n1,n2)=>{
//   // return n1+n2
// }
 

//  const add2=(n1,n2) => n1+n2  // implicit return
const add2=(n1,n2) => ({name:"Zunair"})
console.log(add2(2,4));
