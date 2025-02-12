// let arr1 = [1,2,3,4,5];
// let arr2 = ["goutham", "naveen", "yathish", "surya", "subhan"];
// let arr3 = ["goutham",10,"kumar", 675894];

// array indices
// console.log(arr1[2]);
// console.log(arr1[1]);
// console.log(arr1[0]);
// console.log(arr1[4]);
// console.log(arr1[29]);



// console.log(arr2[2]);
// console.log(arr2[0]);
// console.log(arr2[1]);
// console.log(arr2[5]);
// console.log(arr2[4]);


// for(let i=0;i<arr2.length;i++){        //gives the indx
//     console.log(arr2[i]);
// }

// for(let val of arr2){                   //gives the values
//     console.log(val);
// }


// let cities=["hyderabad", "pune", "benglore", "mumbai", "andhra"];

// for(let city of cities){
//     console.log(city.toUpperCase());
// }


// Average of any array

// let marks = [12,3,4,667,356,36];
// let i=0;

// for(let sum of marks){
//     i = i+sum   
// }
// console.log(i);
// let avg= i/2;
// console.log(`average of ${marks} =${avg}`);




// offer of 10% for every item

// let items=[250,300,367,292,10,389];
// let offer=0;

// for(let i=0;i<items.length;i++){
//     offer = items[i]/10;
//     items[i] -= offer ;    
// }
// console.log(items);




// Array mrthods


// push()- add the value at end 

// let arr2 = ["goutham", "naveen", "yathish", "surya"];
// console.log(arr2);

// arr2.push("subhan");
// console.log(arr2);


// let arr1 = [1,2,3,4,5];
// console.log(arr1);

// arr1.push(102,758,74839,)
// console.log(arr1);



// pop()- pop delete the end value and also return the value

// let arr2 = ["goutham", "naveen", "yathish", "surya", "subhan"];
// console.log(arr2);

// arr2.pop()
// console.log(arr2);


// let removedvalue= arr2.pop();
// console.log(arr2);
// console.log(removedvalue);



// tostring - converts the numbers into string

// let arr1 = [1,2,3,4,5];
// console.log(arr1);
// console.log(arr1.toString());



// concat - add to arrays

// let marvel =["captain america", "iron man", "thor", "spiderman"];
// let dc=["super man", "batman", "flash", "aqua man"];


// console.log(marvel.concat("vision"));


// let heros= marvel.concat(dc);
// console.log(heros);

// console.log(dc.concat(marvel));



// let num1=[1,2,3,4,5];
// let num2=[9,8,7,6];

// console.log(num1.concat(num2));



// unshift - add the element at the starting


// let marvel =["captain america", "iron man", "thor", "spiderman"];

// marvel.unshift("hulk")
// console.log(marvel);

// console.log(marvel.unshift("hulk"));




// shift - removes the starting value and also returns the value

// let marvel =["captain america", "iron man", "thor", "spiderman"];


// let removedval=marvel.shift()
// console.log(removedval);

// console.log(marvel);




// slice - help to get the part of the array

// let num1=[1,2,3,4,5,6,7,8,9,0];

// console.log(num1);
// console.log(num1.slice(3,6));
// console.log(num1.slice(2,9));
// console.log(num1.slice(6,));
// console.log(num1.slice());


// splice - syntax arr.splice(start avl, number of values to delete, elements to add - 1 to n number)

// let num1=[1,2,3,4,5,6,7,8,9,0];     //check in arr, we are updating in the same array
// console.log(num1);

// console.log(num1.splice(7,1,101));

// console.log(num1.splice(2,2,45,36));















