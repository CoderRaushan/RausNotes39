import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js";
const firebaseConfig = {
    apiKey: "AIzaSyBVX8kve8CZM7kgvT44icyDhMvKG8kqddU",
    authDomain: "fir-form-77232.firebaseapp.com",
    databaseURL: "https://fir-form-77232-default-rtdb.firebaseio.com",
    projectId: "fir-form-77232",
    storageBucket: "fir-form-77232.appspot.com",
    messagingSenderId: "1035944672728",
    appId: "1:1035944672728:web:022314c13aae3875b0c6ad",
    measurementId: "G-PGKFC9J0LJ"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

import { getDatabase as getDatabase, ref, set, child, get, update, remove }
    from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";
const db = getDatabase();

const username = document.getElementById('userid');
const password = document.getElementById('passwordinp');
const submit = document.getElementById('submitinp');

function AuthenticateUser() {


    // if (isNullOrWhiteSpaces(username) || isNullOrWhiteSpaces(password)) {
    //     alert("cannot leave username/password field empty");
    //     return;
    // }

    const dbref = ref(db);
    get(child(dbref, "UsersList/" + username.value)).then((snapshot) => {
        if (snapshot.exists()) {
            let dbpass = decPass(snapshot.val().password);
            if (dbpass == password.value) {
                login();
            }
            else {
                alert("user does not exist");
            }
        }
        else {
            alert("username or password is invalid");
        }
    });
}


// function AuthenticateUser() {
//     let user = document.getElementById('userT').value;
//     let pass = document.getElementById('passT').value;

//     if (isNullOrWhiteSpaces(user) || isNullOrWhiteSpaces(pass)) {
//         alert("cannot leave username/password field empty");
//         return;
//     }

//     const dbRef = ref(db);

//     get(child(dbRef, 'UsersList/' + user)).then((snapshot) => {

//         if (snapshot.exists()) {
//             let dbpass = decPass(snapshot.val().Password, pass);

//             if (dbpass == pass) {
//                 login(snapshot.val());
//             }
//             else {
//                 alert("username or password not valid");
//             }
//         }

//         else {
//             alert("username or password not valid");
//         }
//     });
// }
// function isNullOrWhiteSpaces(value) {
//     value = value.toString();
//     return (value == null || value.replaceAll(' ', '').length < 1);
// }




function decPass(dbpass) {
    var pass12 = CryptoJS.AES.decrypt(dbpass, password.value);
    return pass12.toString(CryptoJS.enc.Utf8);
}
function login(user) {
    let keepLoggedIn = document.getElementById('logininp').checked;
    if (!keepLoggedIn) {
        sessionStorage.setItem('user', JSON.stringify(user));
        window.location = "index.html";
    }
    else {
        localStorage.setItem('keepLoggedIn', 'no');
        localStorage.setItem('user', JSON.stringify(user));
        window.location = "index.html";
    }
}

document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevents the form from submitting the traditional way
    AuthenticateUser();
});