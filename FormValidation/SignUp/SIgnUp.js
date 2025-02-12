const SignUp=document.getElementById("SignUp")
// console.log(SignUp);

SignUp.addEventListener("submit",(x)=>{
    x.preventDefault()

    let Name = document.getElementById("Name").value.trim()
    let Email = document.getElementById("Email").value.trim()
    let Password = document.getElementById("Password").value.trim()
    let C_Password = document.getElementById("C_Password").value.trim()

    let isValid = true

    // console.log(Name);
    // console.log(Email);
    // console.log(Password);
    // console.log(C_Password);

    E_pattern=/^[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/
    // E_pattern=/^[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]{4,}$/
    P_pattern=/^(?=.*[a-z])(?=.*[A-z])(?=.*\d)(?=.*[@#!*$]).{8,13}$/


    // let check = E_pattern.test(Email)
    // console.log(check);
    
    // let pcheck = P_pattern.test(Password)
    // console.log(pcheck);


    if(Name === ""){
        document.getElementById("N_Error").innerText="name reqired"
        isValid = false
    }else if(Name.length <= 2){
        document.getElementById("N_Error").innerText="enter a name with min 3 char"
        isValid = false
    }else{
        document.getElementById("N_Error").innerText=""
    }

    if(Email === ""){
        document.getElementById("E_Error").innerText="email required"
        isValid = false
    }else if(!E_pattern.test(Email)){
        document.getElementById("E_Error").innerText="email not valid"
        isValid = false
    }else{
        document.getElementById("E_Error").innerText=""
    }

    if(Password === "" || Password.length>=14){
        document.getElementById("P_Error").innerText="password required or too long password"
        isValid = false
    }else if(!P_pattern.test(Password)){
        document.getElementById("P_Error").innerText="use upeer case, lower case, number and @#!*$ with 8 char"
        isValid = false
    }else{
        document.getElementById("P_Error").innerText=""
    }

    if(Password !== C_Password){
        document.getElementById("CP_Error").innerText="password didnt match"
        isValid = false
    }else{
        document.getElementById("CP_Error").innerText=""
    }

    if(isValid){
        document.getElementById("Name").value = "";
        document.getElementById("Email").value = "";
        document.getElementById("Password").value = "";
        document.getElementById("C_Password").value = "";

        const allUsers = JSON.parse(localStorage.getItem("Users")) || [];
        allUsers.push({name:Name,email:Email,password:Password,c_password:C_Password})
        localStorage.setItem("Users",JSON.stringify(allUsers))

        location.href="./../Login/LogIn.html"
    }
})