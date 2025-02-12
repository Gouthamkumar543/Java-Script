// const url = "https://dummyjson.com/carts"
const url="https://dummyjson.com/products?limit=100&pageSize=10"

const content =document.getElementById("content")

const searchhere = document.getElementById("searchhere")
const searchb = document.getElementById("searchbutton")

searchbutton.addEventListener("click",async ()=>{
    const value = searchhere.value.trim()
    console.log(value);

    // if( value !=="" ){
    // }
    try{
        const s_card = await singlecard(value)
        console.log(s_card);
        display(s_card)
    }catch(err){
        console.log("No data",err); 
    }

})

async function singlecard(sc){
    try{
        const s_url = `https://dummyjson.com/products/search?q=${sc}`;
        const s_response = await fetch (s_url);
        const s_data = await s_response.json();
        const s_products = s_data.products
        // console.log(s_products);
        return s_products
        
    }catch(err){
        console.log("Error----------",err);  
    }
}


async function products() {
    try {
        const response = await fetch(url)
        const data = await response.json()
        const subdata=data.products;
        console.log(subdata);
        
        display(subdata)
    } catch (err) {
        console.log("Some Problem Occured", err);
        return []
    }
}

function display(x) {
    content.innerHTML = ""
    
    x.forEach(article => {
        const card = document.createElement("div")

        const title = article.title.length > 45 ? article.title.slice(0,45) + "....." : article.title
        const description = article.description.length > 200 ? article.description.slice(0,200) + ".....": article.description

        card.innerHTML = `
        <h2 id="category">${article.category.toUpperCase()}</h2>
        <img src=${article.images[0]} alt="">
        <p id="title">${title}</p>
        <p id="description">${description}</p>
        <h3 id="price">Price-${article.price}</h3>
        <h3 id="rating">Rating-${article.rating}</h3>
        <button id="buy">Buy</button>
        <button id="cart">Add to cart</button>
        `
        content.append(card)
    });
}


(async () => {
    try {
        products()
    } catch (err) {
        console.log("data not found", err);
    }
})();