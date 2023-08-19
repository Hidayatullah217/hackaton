
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-auth.js";

  const firebaseConfig = {
    apiKey: "AIzaSyDp6M5mfMNhsRYOJTLiVr3xnOWA0q8Xw9E",
    authDomain: "smit-hackaton217.firebaseapp.com",
    projectId: "smit-hackaton217",
    storageBucket: "smit-hackaton217.appspot.com",
    messagingSenderId: "698607851179",
    appId: "1:698607851179:web:0ec2efba864d032c7e89ee",
    measurementId: "G-HX49J4KCGN"
  };

  const app = initializeApp(firebaseConfig);

  const auth = getAuth(app);


let loginUser = document.querySelector("loginUser")

loginUser.addEventListener("click", ()=>{
  let loginEmail = document.getElementsByClassName("login-email")
  let loginPassword = document.getElementsByClassName("login-password")

signInWithEmailAndPassword(auth, loginEmail.value, loginPassword.value)
  .then((userCredential) => {
    const user = userCredential.user;
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
})
