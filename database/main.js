const username = document.querySelector("#username");
const signoutBtn = document.querySelector("#signout");
// const bottom_menu_profile = document.querySelector("#bottom_menu_profile");
// const userEmail = document.querySelector("#useremail");

let userCreds = JSON.parse(localStorage.getItem("user-creds"));
let userInfo = JSON.parse(localStorage.getItem("user-info"));



let Signout = () => 
{
    localStorage.removeItem("user-creds");
    localStorage.removeItem("user-info");
    window.location.href = 'index.html';
}

let CheckCred = () => 
{
    if (!localStorage.getItem("user-cred")) {
        window.location.href = 'signIn.html';
    } else {
        username.innerText = userInfo.firstname;
    }
}
username.innerText = userInfo.firstname;
// window.addEventListener('load', CheckCred)
signoutBtn.addEventListener('click', Signout);


