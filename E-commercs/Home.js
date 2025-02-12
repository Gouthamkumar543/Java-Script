const url="https://fakestoreapi.com/products";

let AllData=document.getElementById("AllData")

let men=document.getElementById("men")
let women=document.getElementById("women")
let Electronics=document.getElementById("Electronics")
let Jelwery=document.getElementById("Jelwery")


men.addEventListener("click",()=>Data("men's clothing"))
women.addEventListener("click",()=>Data("women's clothing"))
Electronics.addEventListener("click",()=>Data("electronics"))
Jelwery.addEventListener("click",()=>Data("jewelery"))

async function Data(Items){
    const outdata = await fetch(url)
    // console.log(outdata);

    const resultdata = await outdata.json()
    console.log(resultdata);
    AllData.innerHTML=""

    const filteredData = Items ? resultdata.filter(x=>x.category === Items) : resultdata

    filteredData.forEach((x) => {
        let card=document.createElement("div")
        card.className="card"
        card.innerHTML=`
        <img src=${x.image} alt="no image"/>
        <p>${x.title}</p>
        <span>${x.price}</span>
        <button>buy now</button>
        <button id="addcart">Add to cart</button>
        `
        AllData.append(card)


        card.addEventListener("click",()=>{
            location.href="SinglePage.html"
            localStorage.setItem("LocalData",JSON.stringify(x))
        })



        card.querySelector("#addcart").addEventListener("click",(goutham)=>{
            goutham.stopPropagation()
            alert("Add to cart Sucessfully")
            location.href="AddCart.html"
            const cartdata=JSON.parse(localStorage.getItem("CartData")) || []
            cartdata.push(x)
            localStorage.setItem("CartData",JSON.stringify(cartdata))
        })
    });

}
Data()









// let url="https://fakestoreapi.com/products"

// let NewDiv=document.getElementsByClassName("NewDiv")

// let Men=document.getElementsByClassName("Mens");
// let Women=document.getElementsByClassName("Women");
// let Electronics=document.getElementsByClassName("Electonics");
// let Jelwery=document.getElementsByClassName("Jelwery");

// Men[0].addEventListener("click",() => AllData("men's clothing"))
// Women[0].addEventListener("click",() => AllData("women's clothing"));
// Electronics[0].addEventListener("click",() => AllData("electronics"));
// Jelwery[0].addEventListener("click",() => AllData("jewelery"));



// async function AllData(DataItems) {
//     const Data=await fetch(url)
//     const SubData=await Data.json()
//     console.log(SubData);

//     NewDiv[0].innerHTML=""

//     const FilteredSubData = DataItems ? SubData.filter(x => x.category === DataItems) : SubData
//     console.log(FilteredSubData);
    
//     FilteredSubData.forEach((x) => {
//         const Cards=document.createElement("div")
//         Cards.innerHTML= `
//         <img src=${x.image} alt="" width=250/>
//         <p>${x.title}</p>
//         <span>${x.price}</span>
//         <button>Add to Cart</button>
//         <button>Buy Now</button>
//         `
//         NewDiv[0].append(Cards)
//     });
// }
// AllData()


















