const url="https://fakestoreapi.com/products";

//what is api//
// axios 
//fetch():-- patch() -- to uofate the data
// post :-- to post the data / add the data
// delete:-- to delete the data
// get :-- to get the data


// async function getData(){
//     const data= await fetch(url); 
//     console.log(data);
//     // console.log(typeof data);
//     // console.log(data.json());
//         const response=await data.json()
//         console.log(response);
//         response.forEach(x=>{
//             let card=document.createElement("div")
//             card.innerHTML=`
//             <p>${x.category}</p>
//             <img src=${x.image} alt="" width="300"/>
//             `
//             document.body.append(card)
//         })
// }
// getData()
// console.log(getData());




// let allData=document.getElementById("data")

// let btn=document.getElementById("btn");
// let mens=document.getElementById("mens");
// let womens=document.getElementById("womens");
// let elec=document.getElementById("elec");
// let je=document.getElementById("je");

// btn.addEventListener("click",getData)
// mens.addEventListener("click",getData)
// womens.addEventListener("click",getData)
// elec.addEventListener("click",getData)
// je.addEventListener("click",getData)

// async function getData(){
//     const data= await fetch(url)
//     .then(res=>res.json()).then(res=>res).catch(err =>{
//         console.log(err)
//     });
//         data.forEach(x=>{
//             if(x.category === "men's clothing"){
//                 // allData.innerHTML=""
//                 let card=document.createElement("div")
//             card.innerHTML=`
//             <img src=${x.image} alt="" width="300"/>
//             `
//             allData.append(card)
//             }else if(x.category === "women's clothing"){
//                 // allData.innerHTML=""
//                 let card=document.createElement("div")
//                 card.innerHTML=`
//                 <img src=${x.image} alt="" width="300"/>
//                 `
//                 allData.append(card)
//             }else if(x.category === "electronics"){
//                 // allData.innerHTML=""
//                 let card=document.createElement("div")
//                 card.innerHTML=`
//                 <img src=${x.image} alt="" width="300"/>
//                 `
//                 allData.append(card)
//             }else {
//                 // allData.innerHTML=""
//                 let card=document.createElement("div")
//                 card.innerHTML=`
//                 <img src=${x.image} alt="" width="300"/>
//                 `
//                 allData.append(card)
//             }
//         })
        
// }
// getData()


// function a(){
//   function b(){
//     {
//         id:1
//        }
//   }
    
// }
// console.log(a);




// Practiceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee

let allData=document.getElementById("data")


let btn=document.getElementById("btn");
let mens=document.getElementById("mens");
let womens=document.getElementById("womens");
let elec=document.getElementById("elec");
let je=document.getElementById("je");

btn.addEventListener("click",getData)
mens.addEventListener("click",getData)
womens.addEventListener("click",getData)
elec.addEventListener("click",getData)
je.addEventListener("click",getData)

async function getData(){
    const data= await fetch(url)
    .then(res=>res.json()).then(res=>res).catch(err =>{
        console.log(err)
    });    
data.forEach((x) => {
    document.addEventListener("click",(event) =>{
        switch(event.target.category){
            case "men's clothing":
                // var card=document.createElement("div")
                allData.innerHTML=`
                <img src=${x.image} alt="" width="300"/>
                `
            break;
            case "women's clothing":
                // var card=document.createElement("div")
                allData.innerHTML=`
                <img src=${x.image} alt="" width="300"/>
                `
            break;
            case "electronics":
                // var card=document.createElement("div")
                allData.innerHTML=`
                <img src=${x.image} alt="" width="300"/>
                `
            break;
            default:
                // var card=document.createElement("div")
                allData.innerHTML=`
                <img src=${x.image} alt="" width="300"/>
                `
            break;
        }
    })
});        
}
getData()







// data.forEach(x=>{
//     if(x.category === "men's clothing"){
//         // allData.innerHTML=""
        
//     allData.append(card)
//     }else if(x.category === "women's clothing"){
//         // allData.innerHTML=""
        
//         allData.append(card)
//     }else if(x.category === "electronics"){
//         // allData.innerHTML=""
        
//         allData.append(card)
//     }else {
//         // allData.innerHTML=""
//         let card=document.createElement("div")
//         card.innerHTML=`
//         <img src=${x.image} alt="" width="300"/>
//         `
//         allData.append(card)
//     }
// })