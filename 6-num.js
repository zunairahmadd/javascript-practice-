const score=400;
console.log(score);

const bal=new Number(100);
// console.log(bal);

// console.log(bal.toString().length);
// console.log(bal.toFixed(2));     

const num=23.9876
// console.log(num.toPrecision(3));  //gives rounded off value

const anum=100000000;
// console.log(anum.toLocaleString('en-IN'));  //separates zeroes
//Number. use on console to check the safe ranges


// console.log(Math);  // an object having properties

// console.log(Math.abs(-67));  // only chng to postive not postive to neg 

// console.log(Math.round(4.3));  //round off
// console.log(Math.ceil(5.6));
// console.log(Math.floor(5.9));

// console.log(Math.min(1,2,3,));
// console.log(Math.max(2,3,5,8,9,));

console.log(Math.random());   // always gives random value bw one and zero
console.log((Math.random()*10)+1); 
console.log(Math.floor(Math.random()*10)+1); 

const min=10;
const max=20;
console.log(Math.floor(Math.random()*(max-min+1))+min);