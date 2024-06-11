import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCbto2M08KgUSnXqVDBbMxdP-j2pYZqwiw",
  authDomain: "login-e3ada.firebaseapp.com",
  projectId: "login-e3ada",
  storageBucket: "login-e3ada.appspot.com",
  messagingSenderId: "205243728291",
  appId: "1:205243728291:web:7b43a9778052d1737b1a16"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
auth.languageCode = "en";
const provider = new GoogleAuthProvider();

document.addEventListener("DOMContentLoaded", () => {
  const googleLogin = document.getElementById("login_google_btn");
  if (googleLogin) {
    googleLogin.addEventListener("click", () => {
      signInWithPopup(auth, provider)
        .then((result) => {
          const user = result.user;
          console.log('User logged in:', user);
          // Save user info to local storage
          localStorage.setItem("user", JSON.stringify(user));
          // Retrieve the original URL from sessionStorage
          const originalUrl = sessionStorage.getItem('originalUrl');
          if (originalUrl) {
            window.location.href = originalUrl;
          } else {
            window.location.href = '../index.html'; // Fallback in case no original URL is found
          }
          // window.location.href = '../index.html';
        }).catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.error("Error during login:", errorCode, errorMessage);
        });
    });
  } else {
    console.error("Button with ID 'login_google_btn' not found.");
  }
});
