let cardsadd=document.getElementById("cardsadd")

let cartlocalstorage=JSON.parse(localStorage.getItem("CartData"))

cartlocalstorage.forEach(data => {
    let card=document.createElement("div")
    card.innerHTML=`
        <h1>${data.category}</h1>
        <img src=${data.image} alt="no image" width=250/>
        <p>${data.title}</p>
        <span>${data.price}</span>
        <button>buy now</button>
        <button id="remove">Remove</button>
        `
        cardsadd.append(card)


        card.querySelector("#remove").addEventListener("click",()=>{
            cardsadd.removeChild(card)
            // localStorage.removeItem(card)
        })
});