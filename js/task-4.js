const checkForm = document.querySelector(".login-form");

const obj = {}

checkForm.addEventListener("submit", (event) => {

    event.preventDefault();
    const email = checkForm.elements.email.value.trim();
    const password = checkForm.elements.password.value.trim();

    if(!email || !password) {
        alert("All form fields must be filled in");
        return;
    }

    obj.email = email;
    obj.password = password;

    console.log(obj);
    checkForm.reset()
})