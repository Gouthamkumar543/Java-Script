// loops- for loop, while loop, do-while loop, for of loop and for in loop

// for loop

// for(let i=0;i<=3;i++){ //intialition condition and updation
//     console.log(i);
// }


// // let str = "goutham";
// for(let g=0;g<=3;g++){
//     console.log("goutham");
// }

// let num=prompt("enter a number");
// for(let a=0;a<=num;a++){
//     if(a%2==0){
//         console.log("even number:",a);
//     }
// }


// let n=prompt("enter a number");
// for(let a=0;a<=n;a++){
//     if(a%2!=0){
//         console.log("odd number:",a);
//     }
// }






//  while loop

// let r=0;    //intialition
// while(r<3){    //condition
//     console.log(r);
//     r++         // updation
// }



// let j=0;
// while(j<10){
//     console.log("goutham");
//     j++
// }


// let user=prompt("enter a number");
// let a=0
// while(a<=user){
//     if(a%2==0){
//         console.log("even number:",a);
//     }
//     a++
// }

// let u=prompt("enter a number");
// let b=0
// while(b<=u){
//     if(b%2!=0){
//         console.log("odd number:",b);
//     }
//     b++
// }


// do-while 

//  main rule dont right correct statement in do while

// let a=0;
// do{
//     console.log("goutham");
// }while(a>=10)


// for of loop- used for strings and arrays 
// string=("goutham")        array=[1,2,3,4,5]

// let str="goutham";
// for(let val of str){
//     console.log(val);    
// }


// let array=[1,2,3,4,5];
// for(let i of array){
//     console.log(i);
// }




// for in loop- used only for objects
//  it access key in object


// let obj={
//     name:"goutham",
//     email:"gouthamkumar@gmail.com",
//     phn:8309782507,
//     male: true
// }

// for(let user in obj){
//     console.log(user);
// }

// to access values in keys 

// for(let user in obj){
//     console.log(user);
//     console.log(obj[user]);  
// }





// string methods - length, index, touppercase, tolowercase, trim, slice, concat, charAt and replace


// length

// let str=prompt("enter a name");
// let l=str.length
// console.log(l);



// index

// let str="goutham kumar";
// console.log(str[4],str[10]);

// let i = str[3]
// console.log(i);




// touppercase and to lowercase

// let user=prompt("enter ur name");
// console.log(user.toUpperCase());
// console.log(user.toLowerCase());


// trim

// let str="                                  goutham                 r"
// console.log(str.trim());   //removes space from starting


// comcat

// let str1="goutham"
// let str2="kumar"
// console.log(str1.concat(str2));
// console.log(str1.concat("hiiiii"));
// console.log(str2.concat("hiiiii"));
// console.log(str2.concat(str1));


// let str1="123";      // we can only add strings not numbers 
// let str2="567";
// console.log(str1.concat(str2));
// console.log(str1.concat("hiiiii"));
// console.log(str2.concat("hiiiii"));
// console.log(str2.concat(str1));



// slice

// let user = "gouthamkumar"
// console.log(user.slice(0,6));
// console.log(user.slice(0,));
// console.log(user.slice(5,14));
// console.log(user.slice(3,10));
// console.log(user.slice(0,30));


// charat

// let str = "gandikotagouthamkumar";
// console.log(str.charAt(4));
// console.log(str.charAt(0));
// console.log(str.charAt(8));
// console.log(str.charAt(12));
// console.log(str.charAt(13));
// console.log(str.charAt(445));
// console.log(str.charAt(30));



// replace


// let str="goutjam";
// console.log(str.replace("j","h"));    //str.replace("old value","new value")
// console.log(str.replace("go","ij"));
// console.log(str.replace("a","o"));
// console.log(str.replace("utha","zhif"));
// console.log(str.replace("m","r"));    // if the name contains multiple same values it will replace first value



// Template literals

// let str="goutham";
// let result = `My name is ${str}`;
// console.log(result);




// let num=543;
// let fullname="goutham";

// let end=`My name is ${fullname} and my birthday is ${num}`
// console.log(end);

// console.log("my name is",fullname,"and my birthday is",num);











