// declaration assigning and intialization
// using var
// numbers
var goutham; //declaration
goutham=2345 //assigning
console.log("before assigning:",goutham);

goutham=67  //re-assigning
console.log("reassigned value;",goutham);


var kumar;
kumar=5667
console.log(kumar);

var kumar; //re-declaration
kumar=56

var add=goutham+kumar
console.log(add);

console.log("adding strings without var add:",goutham+kumar);



// string
var a="goutham"; //intialization
console.log(a);

var a="yathish"; //re-intialization

var b="kumar"
console.log(b);

var c=a+b
console.log(c);

console.log("adding strings without var c:",a+b);


// using let
// number

// let a=10;
// let b=23      we cant use a and b becz we used them in the var and cant use them in let

let ab;
ab=10

ab=30  // we can re-assign values

// let ab=70; we cant re-declare let values

let bc=23;

console.log(ab+bc);

// strings

let abc;
abc="goutham"

let bcd="kumar"

bcd="hello"

console.log(abc+bcd);

// using const

const hi=50;

const hello=30;

// const hello; we can only use intialization, we cant use declaration and re-assigning
// hello=30

// hello=10
console.log(hi+hello);

// string

const bye="yathish";

const byeall="naveen";

console.log(bye+byeall);

// var hi all=23;
// let hello all=24;
// const byeeeee all=45;    we cant take space b/w two words


let g=10;
{
    let g=40;
    console.log(g+5);
}
console.log(g);




// Datatypes

var primitive=["numbers","string","null","boolean","undefine","symbols"]
console.log("primitive data types;",primitive);

let nonprimitive=["object","array"]
console.log("non primitive data types;",nonprimitive);


