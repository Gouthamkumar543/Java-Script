const LogIn = document.getElementById("LogIn")

LogIn.addEventListener("submit",(x)=>{
    x.preventDefault()

    let Email = document.getElementById("Email").value.trim()
    // console.log(Email);
    
    let Password = document.getElementById("Password").value.trim()
    // console.log(Password);
    
    let S_Credentials=JSON.parse(localStorage.getItem("Users"))
    // console.log(S_Credentials);   
    
    const user=S_Credentials.find(x=>{
        return x.email === Email && x.password === Password
    })
    console.log(user);


    if (user) {
        console.log("User found:", user);
        location.href="./../Home/Home.html"
    } else {
        console.log("Invalid email or password");
    }
})
