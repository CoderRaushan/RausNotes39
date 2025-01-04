
// Add this script to handle user authentication status
document.addEventListener("DOMContentLoaded", function () {
    const authStatus = localStorage.getItem("user");
    if (authStatus) {
        // User is signed in
        document.getElementById("signupBtn").style.display = "none";
        document.getElementById("signinBtn").style.display = "none";
        document.getElementById("signout").style.display = "inline-block";
        document.getElementById("user_icon").style.display = "none";
        document.getElementById("it_user_iamge").src = JSON.parse(localStorage.getItem("user")).photoURL;
        document.getElementById("user_img").src = JSON.parse(localStorage.getItem("user")).photoURL;
        document.getElementById("bottom_menu_profile").textContent = JSON.parse(localStorage.getItem("user")).displayName.split(' ')[0];
    }
    else {
        // User is not signed in
        document.getElementById("signupBtn").style.display = "inline-block";
        document.getElementById("signinBtn").style.display = "inline-block";
        document.getElementById("signout").style.display = "none";
        document.getElementById("it_user_iamge").style.display = "none";
        document.getElementById("kaho").style.display = "none";
        document.getElementById("kaho").style.display = "user_img";

        document.getElementById("bottom_menu_profile").style.display = "none";
         setTimeout(() => {
                    sessionStorage.setItem('originalUrl', window.location.href);
                    window.location.href = '/database/login.html';
                }, 5000);
                // Disable back navigation
                window.history.pushState(null, "", window.location.href);
                window.onpopstate = function () {
                    window.history.pushState(null, "", window.location.href);
                };
    }
});
function redirectToLogin() {
    const currentUrl = window.location.href;
    sessionStorage.setItem('originalUrl', currentUrl);
    window.location.href = '/database/login.html';
}
