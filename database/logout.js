const username = document.querySelector("#username");
const signoutBtn = document.querySelector("#signout");
let userInfo = JSON.parse(localStorage.getItem("user"));
let Signout = () => 
{
    localStorage.removeItem("user");
    window.location.href = 'index.html';
}

let CheckCred = () => 
{
    if (!localStorage.getItem("user")) {
        window.location.href = 'signIn.html';
    } else {
        username.innerText = userInfo.displayName;
    }
}
username.innerText = userInfo.displayName;
signoutBtn.addEventListener('click', Signout);


