const name="Zunair"

const age=20;

//console.log(name+age+"Years");  // old method to add strings 
// not used nowadays 


//console.log(`my name is ${name} and my age is${age}`);  // string interpolation
// new and modern method
const gamename="Bubble Bobble"

// console.log(gamename[0]);  //key value access not array index 
// // spaces cant be count in key value accessin vs code 
// // console also  count spaces of strings

// console.log(gamename.__proto__);
// console.log(gamename.length);

// console.log(gamename.toUpperCase());
//   // string pas by value change hota ha means k unction k bd b uski
//   //  original value chng nai hoti but uski copy change hoti h
//    console.log(gamename.charAt(12));
   
//    console.log(gamename.indexOf('e'));  //  agar char repeat hoga to uski first position de ga bs 
   

   const stringname=gamename.substring(0,6)  
//last value include nahi hogi matlab last index
   console.log(stringname);
   
   const anotherstring=gamename.slice(-13,4)

   console.log(anotherstring);

   const one="     zunair     ";
   console.log(one);
   console.log(one.trim());  // trim removes extra spaces
   
   const url="https://desiserials.com/dr%20aarambhi"
   console.log(url.replace('%20','-')) //for string changings

   console.log(url.includes('ali'));  //binay valuE de ga agar founD to true nai to fALSE 
   
   console.log(gamename.split('-'));
   