
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

let registerBtn = document.querySelector("#registerBtn");




registerBtn.addEventListener('click', ()=>{
    let email = document.querySelector(".username");
    let password = document.querySelector(".password");

createUserWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log("user ====>", user)

    window.location.href = '../profilepage.html'
})
.catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log("errorMessage ====>", errorMessage)
  });
})

