//dates

let date=new Date();
// console.log(date.toString());
// console.log(date.toLocaleString());
// console.log(date.toDateString());

console.log(typeof date);  //object

//let mydate=new Date(2026,2,4)  //month  start from zero in java script
//let mydate=new Date(2026,2,4, 7,40)
let mydate=new Date("2026-4-5")
console.log(mydate.toLocaleString());
 let time=Date.now();
//  console.log(time);
//  console.log(date.getTime());
 
 console.log(Math.floor(Date.now()/1000));
 

 let newDate=new Date();
 console.log(newDate);
 console.log(newDate.getFullYear());
 
 newDate.toLocaleString(`default`,{
    weekend:"long"
 })