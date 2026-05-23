

//const tinderuser=new Object();
const tinderuser={}
tinderuser.id="123abc"
tinderuser.name="Samm"
tinderuser.isloggedin="false"
//console.log(tinderuser);
 
const regularuser={
    name:{
        fullname:{
            firstname:"Zunair",
            lastname:"Ahmad",
        }
    }
}
//console.log(regularuser.name.fullname.lastname);

const obj1={1:"a",2:"b"}

const obj2={3:"a",4:"b"}
//const obj3=Object.assign({},obj1,obj2)  // brackets are targets and objs are sources
const obj3={...obj1,...obj2}

//console.log(obj3);
const users=[
    {
        id:123,
        email:"Mehar@yahoo,com"
    },
      {
        id:123,
        email:"Mehar@yahoo,com"
    },
      {
        id:123,
        email:"Mehar@yahoo,com"
    }
]
users[1].email
// console.log(tinderuser);
// console.log(Object.keys(tinderuser));
// console.log(Object.values(tinderuser));
// console.log(Object.entries(tinderuser));
// console.log(tinderuser.hasOwnProperty('isloggedin'));
// console.log(tinderuser.hasOwnProperty('islogged'));

const course={
    name:"Java SCript",
    price:"999",
    teacher:"Hitesh "
}
const {teacher:sir}=course
//console.log(teacher);
console.log(sir);

// in JSON both keys and values are trearted as strings 
// JSON is like an object without name

