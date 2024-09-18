const form = document.getElementById("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    let emailInput = document.getElementById("email");
    let checker = document.body.querySelector(".email")
    let errorMsg = document.getElementById("invalid");
    let emailPattern =  /^([a-zA-Z0-9-\.])+@([a-zA-Z0-9-\.])+\.([a-z]{2,8})(\.[a-z]{2,5})?$/;

    console.log()

    if(emailInput.value.match(emailPattern)){
        checker.classList.remove("error");
        emailInput.style.border = '1.5px solid green'
        errorMsg.textContent = "Email is valid";
        errorMsg.style.display = "block"
        errorMsg.style.color = "green"
    }
    else {
        checker.classList.add("error");
        errorMsg.style.display = "block"
        emailInput.style.border = null;
        errorMsg.style.color = "red"
        errorMsg.textContent = "Please provide a valid email";        
    }

})