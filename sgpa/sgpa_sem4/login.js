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
          window.location.href = "information_page.html";
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

// Function to update user profile on the info page
function updateUserProfile(user) {
  const userName = user.displayName;
  const userEmail = user.email;
  const userProfilePicture = user.photoURL;

  document.getElementById("userName").textContent = userName;
  document.getElementById("userEmail").textContent = userEmail;
  document.getElementById("userProfilePicture").src = userProfilePicture;
}

// Check if we are on the information page
if (window.location.pathname.includes("information_page.html")) {
  console.log('On information page');
  const userString = localStorage.getItem("user");
  if (userString) {
    const user = JSON.parse(userString);
    console.log('User data retrieved from local storage:', user);
    updateUserProfile(user);
  } else {
    console.error("No user data found in local storage.");
  }
}
