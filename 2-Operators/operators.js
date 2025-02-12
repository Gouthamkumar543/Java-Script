/*Operators - Arthematic operators, unary operators, Assigning operators, Comparision operators and Logical operators*/

// Arthematic operators - +, -, *, /, %, and **

a=20;
b=10;

console.log("a=",a,"b=",b);
console.log("a+b=",a+b);
console.log("a-b=",a-b);
console.log("a*b=",a*b);
console.log("a/b=",a/b);
console.log("a%b=",a%b);     //gives remainder
console.log("a**b=",a**b);   //a power b

// unary operators - a++, ++a, a-- and --a

// console.log("a++=",a++);
// console.log("value of a after increment",a);

console.log("++a=",++a);

console.log("a--",a--);
console.log("value of a after decrement",a);

console.log("--a",--a);


// Assigning operators - +=, -=, *=, /=, %=, and **=

c = 2;
// c += 10  c= c+10

console.log("value of c",c);
console.log("c += 10 :",c+=10);
console.log("c -= 5 :",c-=5);
console.log("c *= 9 :",c*=9);
console.log("c /= 3 :",c/=3);
console.log("c %= 6 :",c%=6);
console.log("c **= 2 :",c**=2);

// Comparision operators- ==, ===, !=, !==, <, <=, >, and >=

l=5;
m="5";
// m=10

console.log("l=",l,"m",m);
console.log("l == m ;", l == m);
console.log("l === m ;", l === m);
console.log("l != m ;", l != m);
console.log("l !== m ;", l !== m);
console.log("l < m ;", l < m);
console.log("l <= m ;", l <= m);
console.log("l > m ;", l > m);
console.log("l >= m ;", l >= m);


// logical operatora- &&, ||, and !

r=5;
q=9;

console.log("r < 10 && q < 10 :",r < 10 && q < 10);
console.log("r > 10 && q > 10 :",r > 10 && q > 10);
console.log("r < 10 && q > 10 :",r < 10 && q > 10);
console.log("r > 10 && q < 10 :",r > 10 && q < 10);


console.log("r < 10 || q < 10 :",r < 10 || q < 10);
console.log("r > 10 || q > 10 :",r > 10 || q > 10);
console.log("r < 10 || q > 10 :",r < 10 || q > 10);
console.log("r > 10 || q < 10 :",r > 10 || q < 10);

console.log("!(r < 10 :)",!(r < 10));
console.log("!(q < 10 :)",!(q < 10));
console.log("!(r > 10 :)",!(r > 10));
console.log("!(r > 10 :)",!(r > 10));



// Conditional statements- if, if-else and else if
// using only if


g=prompt("Enter a number");
console.log("g user number:",g);

if(g >= 50){
    console.log("g is highest number");   
}

if(g < 50){
    console.log("g is smallest number");   
}





// using if else

h=prompt("enter a nuamber");
console.log("h user number:",h);

if(h == 100){
    console.log("h is equal to 100");
}else{
    console.log("h is not equal to 100");
    
}






// using if, else and else if

user=prompt("enter yoyr marks");
console.log("User marks :",user);

if(user >= 91 && user <= 100){
    console.log("O grade");
}else if(user >= 81 && user <= 90){
    console.log("A+ grade");
}else if(user >= 71 && user <= 80){
    console.log("B+ grade");
}else if(user >= 61 && user <= 70){
    console.log("C+ grade");
}else if(user >= 51 && user <= 60){
    console.log("D+ grade");
}else if(user >= 41 && user <= 50){
    console.log("E+ grade");
}else{
    console.log("you have failed : F");
}




// Ternary operators- condition ? ture:false


let p=prompt(" Type a number");
console.log("p value:",p);


let x=p < 100 ? "smaller" : "greater"
console.log(x);

p < 100 ?  console.log("smaller"): console.log("greater");
