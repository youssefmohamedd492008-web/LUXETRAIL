function login(){

let username =
document.getElementById("username").value;


let password =
document.getElementById("password").value;



if(username === "admin" && password === "123456"){


window.location.href="dashboard.html";


}

else{


document.getElementById("message").innerHTML =
"Wrong Username or Password";


}

}