// const apikey = "6d814b3c7b774403a7610fe88e22564e"

// const content =document.getElementById("content")

// async function randomnews (){
//     try{
//         const apiurl=`https://newsapi.org/v2/everything?q=news&apiKey=6d814b3c7b774403a7610fe88e22564e`
//         const response = await fetch(apiurl)
//         // console.log(response);
//         const data= await response.json()
//         // console.log(data);
//         // return data;
//         display(data)
//     }catch(err){
//         console.log("Some Problem Occured",err);
//         return []
//     }
// }


// function display(x) {
//     content.innerHTML = ""

//     x.forEach(article => {
//         const card = document.createElement("div")
//         card.innerHTML = `
//         <img src=${article.image} alt="">
//         <p id="title">${article.title}</p>
//         <p id="description">${article.description}</p>
//         `

//         content.append(card)
//     });
// }

// randomnews()
