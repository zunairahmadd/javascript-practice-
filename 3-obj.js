




const mysym=Symbol("key1");

const obj={
    name:"Zunair",
    "Full name":"Zunair Ahmad",
    age:18,
    [mysym]:"mykey1",
    email:"mehar@gmail.com",
    location:"Kasur",
    isloggedin:false,
    lastlogindays:["Monday","Friday"]
}

console.log(obj.email);   
console.log(obj["email"]);
 console.log(obj[mysym]);  //use square brackets for symbol otherwise treated as string
 console.log(typeof mysym);

 obj.email="mehar@yahoo.com"  // for change
 console.log(obj["email"]);
 
 Object.freeze(obj);   // no changings made after this freeze 
 
 obj.email="mehar@google.com" 
  console.log(obj);

  obj.greeting= function(){
    console.log("Hello JS User");
    
  }
  console.log(obj.greeting());

  obj.greeting2= function(){
    console.log(`Hello JS User,${this.name}`);
    
  }
  console.log(obj.greeting());
  console.log(obj.greeting2());