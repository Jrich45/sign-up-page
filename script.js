let password = document.querySelector('#password');
let confirm = document.querySelector('#confirm');




function checkPassword() {
    if (password === confirm) {
        password.classList.remove("error")
        confirm.classList.remove("error")

        password.classList.add("noerror")
        confirm.classList.remove('noerror')
    }

}