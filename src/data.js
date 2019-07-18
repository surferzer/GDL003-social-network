const firebaseConfig = {
  apiKey: "AIzaSyC_kJkQ9LzVm9XJz-TA9jHMuH-yC367zIU",
  authDomain: "garnacha-love-rs.firebaseapp.com",
  databaseURL: "https://garnacha-love-rs.firebaseio.com",
  projectId: "garnacha-love-rs",
  storageBucket: "",
  messagingSenderId: "671471595388",
  appId: "1:671471595388:web:19cc42fa4d01f3a3"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


//funcion para registrar
function registrar(){
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    
    console.log(email);
    console.log(password);

 firebase.auth().createUserWithEmailAndPassword(email, password)
        .catch(function(error) {
        // Handle Errors here.
        let errorCode = error.code;
        let errorMessage = error.message;

        console.log(errorCode);
        console.log(errorMessage) ;
        // ...
      });
     
}


window.socialNetwork={
  registrar,
};




  