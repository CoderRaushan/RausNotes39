const signoutBtn = document.querySelector("#signout");
let userInfo = JSON.parse(localStorage.getItem("user"));
let Signout = () => {
    localStorage.removeItem("user");
    window.location.href = '/index.html';
}
signoutBtn.addEventListener('click', Signout);