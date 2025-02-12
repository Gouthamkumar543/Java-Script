let filledform=document.getElementById("form")

filledform.addEventListener("submit",(g)=>{
    g.preventDefault();
    let name=document.getElementById("name").value;
    let email=document.getElementById("email").value;
    let password=document.getElementById("password").value;

    const user={
        fullname: name,
        Email: email,
        Password: password
    }

    localStorage.setItem("userinfo",JSON.stringify({"name":name,"email":email,"password":password}))
})