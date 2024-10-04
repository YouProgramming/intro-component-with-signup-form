let theForm = document.getElementsByTagName("form")[0];
console.log(theForm)
theForm.addEventListener("submit",(event) => {
    event.preventDefault();
    if(checkEmptyFields()){
        displayErrorMessages(false);
    }else{
        displayErrorMessages(true);
    }
})
function displayErrorMessages(bool){
    let errors = document.querySelectorAll("form .error");
    if(bool){
        errors.forEach((element) => {
            element.style.display = "inline";
        });
    }else{
        errors.forEach((element) => {
            element.style.display = "none";
        })
    }
}
function checkEmptyFields(){
    let firstName = document.getElementById("first-name");
    let lastName = document.getElementById("last-name");
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    if(!validateEmail(email.value))
        return false;

    return (firstName.value != "" && lastName.value != "" && email.value != "" && password.value != "");
}
function validateEmail(email){
    let reg = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return  (reg.test(email))
}