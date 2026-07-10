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

}const revenue = document.getElementById('revenueChart');

if(revenue){

new Chart(revenue,{

type:'line',

data:{

labels:[
"Jan",
"Feb",
"Mar",
"Apr",
"May"
],

datasets:[{

label:"Revenue",

data:[
12000,
19000,
15000,
30000,
45000
]

}]

}

});

}



const booking = document.getElementById('bookingChart');


if(booking){

new Chart(booking,{

type:'doughnut',

data:{

labels:[
"Confirmed",
"Pending",
"Cancelled"
],

datasets:[{

data:[
70,
20,
10
]

}]

}

});

}