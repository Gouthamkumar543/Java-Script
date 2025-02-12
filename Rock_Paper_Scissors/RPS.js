let usercount = document.getElementById("p1")
let computercount = document.getElementById("p2")

let ucount=0
let ccount=0

let mesg_container = document.getElementById("mesg_container")
let content= document.getElementsByClassName("p3")


// const choices = document.querySelectorAll(".choice div")
// console.log(choices);

// choices.forEach((choice)=> {
//     console.log(choice);
//     choice.addEventListener("click",(element)=>{
//         const userclicked = choice.getAttribute("class");
//         console.log("option selected",userclicked);
//     })
// })



const choices = document.querySelectorAll("#choice div"); // Selects all divs inside #choice
// console.log(choices);

choices.forEach((choice) => {
    // console.log(choice);
    choice.addEventListener("click", () => {
        const userclicked = choice.getAttribute("id");
        // console.log("option selected", userclicked);
        playgame(userclicked)
        content[0].innerText=`user:${userclicked}`
    });
});


const computergenator = () => {
    const options = ["rock","paper","scissors"]
    const result = Math.floor(Math.random()*3)
    // console.log(result);
    return options[result]
}
// computergenator(computergenator)


const playgame = (userchoice) =>{
    // console.log("user choice:",userchoice);
    const computerchoice= computergenator();
    // console.log("computer choice:",computerchoice); 
    content[1].innerText=`computer:${computerchoice}`


    if(userchoice === computerchoice){
        // console.log("Game Draw");
        mesg_container.innerText="Draw Match!!! play again"
        mesg_container.style.backgroundColor="yellow"
        mesg_container.style.color="black"
    }else{
        let userwin=true;

        if(userchoice === "rock"){ //computer cant take rock becz it draws so only use paper or scissors
           userwin = computerchoice === "paper" ? false : true;
        }else if(userchoice === "paper"){
           userwin = computerchoice === "scissors" ? false : true;
        }else{
           userwin = computerchoice === "rock" ? false : true;
        }
       showwinner(userwin);
    }  
}


const showwinner = (x) =>{
    if(x){
        ucount++;
        usercount.innerText=ucount;
        // console.log("You won the game");
        mesg_container.innerText=`You won the game!!!!`
        mesg_container.style.backgroundColor="green"
        // mesg_container.style.color="black"
    }else{
        ccount++;
        computercount.innerText=ccount;
        // console.log("you lost the game"); 
        mesg_container.innerText=`You lost the game!!!!`
        mesg_container.style.backgroundColor="red"
        // mesg_container.style.color="black"
    }
}








// Second time practiceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee

// let userc=0
// let computerc=0

// let user=document.getElementById("p1")
// let computer=document.getElementById("p2")

// let display=document.getElementById("mesg_container")
// let content= document.getElementsByClassName("p3")




// const choices = document.querySelectorAll(".choices")

// choices.forEach(x=>{
//     const userselected = x.addEventListener("click",()=>{
//         const userchoice=x.getAttribute("id")
//         playgame(userchoice)
//         content[0].innerText=userchoice
//     })
// })

// const computergenator = ()=>{
//     const options = ["rock","paper","scissors"]
//     const computer=Math.floor(Math.random()*3)
//     return options[computer]
// }

// const playgame=(x)=>{
//     console.log("user selected",x);
//     const computerselected = computergenator()
//     console.log("computer selected",computerselected);
//     content[1].innerText=computerselected

//     if(x === computerselected){
//         console.log("game draw");
//     }else{
//         let win =true

//         if(x==="rock"){
//             win = computerselected === "paper"? false : true
//         }else if(x==="paper"){
//             win = computerselected === "scissors"? false : true
//         }else{
//             win = computerselected === "rock" ? false : true
//         }
//         showwinner(win)
//     }
// }



// const showwinner = (x) => {
//     if(x){
//         // console.log("you won");
//         userc++
//         user.innerText=userc
//         display.innerText="you won"
//         display.style.backgroundColor="green"
//     }else{
//         // console.log("lost");
//         computerc++
//         computer.innerText=computerc
//         display.innerText="you lost"
//         display.style.backgroundColor="red"
//     }
// }