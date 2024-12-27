// // Function to load external HTML content
// async function loadComponent(component, id) {
//     const response = await fetch(component);
//     const content = await response.text();
//     document.getElementById(id).innerHTML = content;
//   }

//   // Load header and footer dynamically and execute DOM-dependent code afterward
//   loadComponent("/header&footer/Header.html", "header").then(() => {
//     // Wait for the header content to load before updating the UI
//     updateAuthUI();
//     attachLogoutListener();
//     initTheme();
//     setupNavbar();
//   });

//   loadComponent("/header&footer/footer.html", "footer");

//   // ---------------------- UI Update Function ----------------------
//   function updateAuthUI() {
//     const authStatus = localStorage.getItem("user");

//     // Check if the DOM elements are available
//     const signupBtn = document.getElementById("signupBtn");
//     const signinBtn = document.getElementById("signinBtn");
//     const signoutBtn = document.getElementById("signout");
//     const userIcon = document.getElementById("user_icon");
//     const userImg = document.getElementById("user_img");
//     const bottomMenuProfile = document.getElementById("bottom_menu_profile");
//     const it_user_image=document.getElementById("it_user_image_");

//     // Enhanced logging to see which elements are missing
//     if (!signupBtn) console.error("signupBtn element is missing.");
//     if (!signinBtn) console.error("signinBtn element is missing.");
//     if (!signoutBtn) console.error("signoutBtn element is missing.");
//     if (!userIcon) console.error("userIcon element is missing.");
//     if (!userImg) console.error("userImg element is missing.");
//     if (!bottomMenuProfile) console.error("bottomMenuProfile element is missing.");
//     if(!it_user_image) console.error("it_user_iamge element is missing.");

//     // If any element is missing, log the error and return early
//     if (!signupBtn || !signinBtn || !signoutBtn || !userIcon || !userImg || !bottomMenuProfile) {
//       console.error("One or more required elements are missing from the DOM.");
//       return;
//     }

//     if (authStatus) {
//       // User is logged in
//       signupBtn.style.display = "none";
//       signinBtn.style.display = "none";
//       signoutBtn.style.display = "inline-block";
//       document.getElementById("user_icon").style.display = "none";
//       it_user_iamge.src = JSON.parse(localStorage.getItem("user")).photoURL;
//       document.getElementById("user_img").src = JSON.parse(localStorage.getItem("user")).photoURL;
//       const userInfo = JSON.parse(authStatus); // Get user details
//       userIcon.style.display = "none";
//       userImg.src = userInfo.photoURL;
//       bottomMenuProfile.textContent = userInfo.displayName.split(" ")[0];
//     } else {
//       // User is logged out
//       signupBtn.style.display = "inline-block";
//       signinBtn.style.display = "inline-block";
//       signoutBtn.style.display = "none";
//     }
//   }

//   // ---------------------- Logout Function ----------------------
//   function attachLogoutListener() {
//     const signoutBtn = document.getElementById("signout");
//     if (signoutBtn) {
//       signoutBtn.addEventListener("click", () => {
//         localStorage.removeItem("user"); // Clear user data
//         updateAuthUI(); // Update UI
//         window.location.href = sessionStorage.getItem("originalUrl"); // Redirect to original URL
//       });
//     }
//   }

//   // ---------------------- Theme Toggle ----------------------
//   function enableDarkTheme() {
//     document.documentElement.classList.add("dark_theme");
//     document.getElementById("themeicon").innerHTML = '<i class="fa-solid fa-sun"></i>';
//     localStorage.setItem("theme", "dark");
//   }

//   function enableLightTheme() {
//     document.documentElement.classList.remove("dark_theme");
//     document.getElementById("themeicon").innerHTML = '<i class="fa-solid fa-moon"></i>';
//     localStorage.setItem("theme", "light");
//   }

//   function toggleTheme() {
//     if (document.documentElement.classList.contains("dark_theme")) {
//       enableLightTheme();
//     } else {
//       enableDarkTheme();
//     }
//   }

//   function initTheme() {
//     const savedTheme = localStorage.getItem("theme");
//     if (savedTheme === "dark") {
//       enableDarkTheme();
//     } else {
//       enableLightTheme();
//     }
//   }

//   // ---------------------- Navbar Click Handling ----------------------
//   function setupNavbar() {
//     const nav = document.querySelector(".nav-class-for-phone");
//     const checkbox = document.getElementById("check");

//     if (nav && checkbox) {
//       document.addEventListener("click", (event) => {
//         if (!nav.contains(event.target) && checkbox.checked) {
//           checkbox.checked = false; // Close navbar when clicked outside
//         }
//       });
//     }
//   }

//   // ---------------------- Page Sharing ----------------------
//   async function sharepage() {
//     await navigator.share({
//       title: document.title,
//       url: window.location.href,
//     });
//   }

//   // ---------------------- Store Current URL ----------------------
//   const currentUrl = window.location.href;
//   sessionStorage.setItem("originalUrl", currentUrl);

// Function to load external HTML content
async function loadComponent(component, id) {
  const response = await fetch(component);
  const content = await response.text();
  document.getElementById(id).innerHTML = content;
}

// Load header and footer dynamically, then update the UI
Promise.all([
  loadComponent("/header&footer/Header.html", "header"),
  loadComponent("/header&footer/footer.html", "footer"),
]).then(() => {
  updateAuthUI(); // Only call this after both header and footer are loaded
});

function updateAuthUI() {
  const authStatus = localStorage.getItem("user");
  const signupBtn = document.getElementById("signupBtn");
  const signinBtn = document.getElementById("signinBtn");
  const signoutBtn = document.getElementById("signout");
  const userIcon = document.getElementById("userIcon");
  const bottomMenuProfile = document.getElementById("bottom_menu_profile");
  const itUserImage = document.getElementById("it_user_image");

  if (authStatus) {
    // User is logged in
    signupBtn.style.display = "none";
    signinBtn.style.display = "none";
    signoutBtn.style.display = "inline-block";
    userIcon.style.display = "inline-block";
    itUserImage.style.display = "inline-block";
    bottomMenuProfile.textContent = JSON.parse(
      localStorage.getItem("user")
    ).displayName.split(" ")[0];
    userIcon.src = JSON.parse(localStorage.getItem("user")).photoURL;
    itUserImage.src = JSON.parse(localStorage.getItem("user")).photoURL;
  } else {
    // User is logged out
    signupBtn.style.display = "inline-block";
    signinBtn.style.display = "inline-block";
    signoutBtn.style.display = "none";
    userIcon.style.display = "none";
    itUserImage.style.display = "none";
  }
}

// Dark and light theme functions
function enableDarkTheme() {
  document.documentElement.classList.add("dark_theme");
  document.getElementById("themeicon").innerHTML =
    '<i class="fa-solid fa-sun"></i>';
  localStorage.setItem("theme", "dark");
}

function enableLightTheme() {
  document.documentElement.classList.remove("dark_theme");
  document.getElementById("themeicon").innerHTML =
    '<i class="fa-solid fa-moon"></i>';
  localStorage.setItem("theme", "light");
}

function toggleTheme() {
  if (document.documentElement.classList.contains("dark_theme")) {
    enableLightTheme();
  } else {
    enableDarkTheme();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    enableDarkTheme();
  } else {
    enableLightTheme();
  }
});

// Share functionality
async function sharepage() {
  await navigator.share({
    title: document.title,
    url: window.location.href,
  });
}

// Logout functionality
const signoutBtn = document.getElementsByClassName("logoutbtn");

signoutBtn.addEventListener("click", () => {
  localStorage.removeItem("user");
  updateAuthUI();
  window.location.href = sessionStorage.getItem("originalUrl");
});

// Ensure that checkbox in mobile nav closes when clicked outside
document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector(".nav-class-for-phone");
  const checkbox = document.getElementById("check");
  document.addEventListener("click", (event) => {
    if (!nav.contains(event.target) && checkbox.checked) {
      checkbox.checked = false;
    }
  });
});

// Store current URL for redirection after login/logout
const currentUrl = window.location.href;
sessionStorage.setItem("originalUrl", currentUrl);
