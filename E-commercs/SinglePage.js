let Div1=document.getElementById("Div1")

let LocalStoredData = JSON.parse(localStorage.getItem("LocalData"))

Div1.innerHTML=`
        <h1>${LocalStoredData.category}</h1>
        <img src=${LocalStoredData.image} alt="no image"/>
        <p>${LocalStoredData.title}</p>
        <span>${LocalStoredData.price}</span>
        <button>buy now</button>
        <button>Add to cart</button>
        `