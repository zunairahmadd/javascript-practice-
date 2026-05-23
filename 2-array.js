const fruits=["Mango","Apple","Orange"]
const veg=["Potato","Tomato","Chilli"]
fruits.push(veg);  //returns existig array
console.log(fruits);
console.log(fruits[3][1]);

const items=fruits.concat(veg);   //concat returns new array
console.log(items);  

  const allitems=[...fruits,...veg]  //break into single elements
  console.log(allitems);

  const array=[1,2,3,[4,5,6],7,[5,4,2,[1,4,6]]]
  const newarray=array.flat(Infinity);
  console.log(newarray);

  console.log(Array.isArray("Ali"));
  console.log(Array.from("Ali"));
   console.log(Array.from({name:"Zunair"}));
   
   let score1=100
    let score2=200
     let score3=300
     console.log(Array.of(score1,score2,score3));
     