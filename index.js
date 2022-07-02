const form = document.querySelector("form");
const email = form.getElementById("email");
const name = form.getElementById("name");
const phone = form.getElementById("phone");
const massage = form.getElementById("massage");
const submitBtn = form.getElementById("submitBtn");







form.addEventListener("submit" ,formHandler);

function formHandler(event){
    event.preventDefault();



    const userInfo ={
        email: email.value,
        name: name.value,
        phone: phone.value,
        password: password.value,
        massage: massage.value,
};
    console.log(userInfo);
    email.value = "";
    name.value = "";
    phone.value = "";
    password.value = "";
    massage.value = "";

    
};
