let userlink = document.getElementById('userlink');
let signoutlink = document.getElementById('signoutlink');
var currentuser = null;

function getUsername() {
    let keepLoggedIn = localStorage.getItem("logininp");
    if (keepLoggedIn == "yes") {
        currentuser = JSON.parse(localStorage.getItem('user'));
    }
    else {
        currentuser = JSON.parse(sessionStorage.getItem('user'));
    }
}

// function getUsername() {
//     let keepLoggedIn = localStorage.getItem("logininp");

//     if (keepLoggedIn == "yes") {
//         let userFromLocalStorage = localStorage.getItem('user');

//         if (userFromLocalStorage) {
//             currentuser = JSON.parse(userFromLocalStorage);
//         }
//     } else {
//         let userFromSessionStorage = sessionStorage.getItem('user');

//         if (userFromSessionStorage) {
//             currentuser = JSON.parse(userFromSessionStorage);
//         }
//     }
// }

function logout() {
    sessionStorage.removeItem('user');
    localStorage.removeItem('user');
    localStorage.removeItem('logininp');
    window.location.href = "index.html";
    localStorage.removeItem()
    // location.href = "index.html";
}

window.onload = function () {
    getUsername();
    if (currentuser == null) {
        userlink.innerText = "SignUp";
        userlink.href = "register.html";
        signoutlink.innerText = "Login";
        signoutlink.href = "login.html";
    }
    else {
        userlink.innerText = currentuser.name;
        userlink.href = "#";
        signoutlink.innerText = "Log Out";
        signoutlink.href = "javascript:logout()";

    }
}