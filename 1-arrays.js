const myarr=[0,1,2,3,4,5]
const array2=["ali","hasnain","rehan","muneer"]

const array3=new Array(1,2,3,4)
console.log(array[3]);


//array methods
array.push(6,7,8)
array.pop();  // reoves last value of array

array.unshift(8);//add a start value 
array.shift()  //removes first value


 console.log(array.indexOf(4));
 console.log(array.includes(23));
 
const array4=myarr.join() // converts array into string type alse binds array
console.log(array);

console.log(typeof array4);

const myn1=myarr.slice(1,3);  // range not included
console.log(myn1)
console.log("B ",myarr);

const myn2=myarr.splice(1,3);  //removes elements of given range

console.log("c ",myarr);
;
console.log(myn2);